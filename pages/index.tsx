import { onSnapshot, query, where } from "firebase/firestore";
import {
  addDoc,
  deleteDoc,
  getDoc,
  updateDoc,
  findMany,
  getUserCollection,
  getUserDoc,
  signInFirebase,
} from "lib/firebase-web";
import type { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, signIn } from "next-auth/react";
import { KeyboardEvent, SyntheticEvent, useEffect, useState } from "react";
import Footer from "components/Footer";
import { Todo, TodoFilter } from "lib/types";
import { useMemo } from "react";
import { useRouter } from "next/router";
import User from "components/User";
import GoogleLoginButton from "components/GoogleLoginButton";
import GithubLoginButton from "components/GithubLoginButton";

const Home: NextPage<{ data: Session & { id: string }; todos: any[] }> = ({
  data: session,
  todos,
}) => {
  const router = useRouter();
  // const [loading, setLoading] = useState(!!session);

  const email = useMemo(() => session?.user?.email ?? "", [session]);

  useEffect(() => {
    if (!session) return; // FIXME: load session;

    (async () => {
      const userCollectionRef = getUserCollection(email, "store");
      await signInFirebase(); // loading;
      // setLoading(false);

      // https://github.com/firebase/firebase-js-sdk/issues/5629#issuecomment-945010156
      const unsub = onSnapshot(
        userCollectionRef,
        { includeMetadataChanges: true },
        (snap) => {
          snap.docChanges().forEach(({ doc, type }) => {});
        }
      );
      return unsub;
    })();
  }, []);

  return (
    <>
      {/* <Loading block={loading} /> */}
      <User session={session} />
      <section>
        <GithubLoginButton />
        <GoogleLoginButton />
        {session?.user && (
          <>
            <header className="header"></header>
            <section className="main"></section>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // It's a lot of time every page.
  const session = await getSession(context);
  // const todoRefs = session
  //   ? await getTodoRefs((session?.user?.email as string) ?? "")
  //   : [];

  return {
    props: {
      data: session,
    },
  };
};
