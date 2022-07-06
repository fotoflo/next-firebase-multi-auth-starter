import { createFirebaseCustomTokenHandler, db, app } from "lib/firebase-server";

export default createFirebaseCustomTokenHandler({
  additionalClaims: (session) => ({}),
});
