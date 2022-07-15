import { UserAccount } from "lib/firebase-server";
import { DefaultSession } from "next-auth";
/**
 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
 */
export interface Session {
    user: {
      id: string;
      image: string;
      email: string;
      emailVerified: Boolean;
      name: string
    };
    emailVerified: boolean;
    id: string;
    providers?: UserAccount[]
  
} & DefaultSession["session"];
