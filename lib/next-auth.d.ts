import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    session: {
      /** The user's postal address. */
      user: {
        id: string;
      };
      emailVerified: boolean;
    } & DefaultSession["session"];
  }
}
