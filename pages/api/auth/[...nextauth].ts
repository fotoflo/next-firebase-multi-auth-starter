import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import GmailProvider from "next-auth-custom/GmailProvider";
import FirebaseAdapter from "next-auth-custom/firebase-adapter";
import { db } from "lib/firebase-server";

// console.log({
//   clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
//   clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
// });

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GmailProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    session: async (session) => {
      session.id = session.user.id;
      return Promise.resolve(session);
    },
  },
  adapter: FirebaseAdapter(db),
});
