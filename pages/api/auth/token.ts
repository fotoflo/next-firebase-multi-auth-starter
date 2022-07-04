import { createFirebaseCustomTokenHandler, db, app } from "lib/firebase-server";

export default createFirebaseCustomTokenHandler({
  additionalClaims: (session) => ({}),
});

export type CustomToken = {
  token: string;
  expires: string; // date
};

const admin = app;

export async function getCustomToken(sessionToken: string) {
  const tokenDocRef = db
    .collection("_next_auth_firebase_adapter_")
    .doc("store")
    .collection("customToken")
    .doc(sessionToken);
  const tokenDoc = await tokenDocRef.get();
  if (!tokenDoc.exists) return;
  const { token, expires } = tokenDoc.data() as CustomToken;
  if (Date.now() > new Date(expires).getTime()) return;
  return token;
}

export async function updateCustomToken(sessionToken: string, token: string) {
  const tokenDocRef = db
    .collection("_next_auth_firebase_adapter_")
    .doc("store")
    .collection("customToken")
    .doc(sessionToken);

  await tokenDocRef.set({
    token,
    expires: Date.now() + 60 * 60 * 1000,
  });

  return token;
}

export function getSessionToken(req: NextApiRequest) {
  return (
    req.cookies["__Secure-next-auth.session-token"] ??
    req.cookies["next-auth.session-token"]
  );
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(403).json(false);
  const session = (await getSession({ req })) as Session;
  if (!session) return res.status(403).json(false);
  const sessionToken = getSessionToken(req);
  const { user } = session as unknown as {
    user: NonNullable<Session["user"]>;
  };
  const email = user.email as string;
  let token = await getCustomToken(sessionToken);
  if (token) return res.json(token);

  token = await admin
    .auth()
    .createCustomToken(
      email,
      Object.assign({}, additionalClaims?.(session), { sessionToken })
    );

  await updateCustomToken(sessionToken, token);

  return res.json(token);
}
