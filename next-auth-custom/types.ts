import { DefaultSession } from "next-auth";
/**
 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
 */
export interface Session {
  session: {
    user: {
      id: string;
      image: string;
      email: string;
    };
    emailVerified: boolean;
  } & DefaultSession["session"];
}
