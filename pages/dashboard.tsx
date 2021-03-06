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

import { Session, User } from "next-auth";
import { ServersideSessionHandler } from "lib/middleware";

import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import Footer from "components/Footer";
import { PrettyPrintJson } from "components/utilComponents";
import GoogleLoginButton from "components/GoogleLoginButton";
import GithubLoginButton from "components/GithubLoginButton";

import NavBar from "components/NavBar";
import FirebaseDebugButton from "components/FirebaseDebugButton";

import { Container } from "react-bootstrap";

import { Theme } from "types/themes";

import { UserAccount } from "lib/firebase-server";

const Dashboard: NextPage<{ data: Session & { id: string } }> = ({
  data: session,
  theme,
  themeToggler,
}: {
  data: Session;
  theme: Theme["theme"];
  themeToggler: Theme["themeToggler"];
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(!!session);

  useEffect(() => {
    const signInFirestore = async () => {
      await signInFirebase();
    };

    signInFirestore();
  }, []);

  const email: string = useMemo(() => session?.user?.email ?? "", [session]);
  const providers: string[] = useMemo(() => {
    return session?.externalAccounts?.map((token) => token.provider);
  }, [session]);

  return (
    <Container>
      {/* <Loading block={loading} /> */}

      <NavBar theme={theme} themeToggler={themeToggler} session={session} />
      <section>
        {!providers.find((p) => p == "github") && <GithubLoginButton />}
        {!providers.find((p) => p == "gmail") && (
          <GoogleLoginButton prompt="Login with Gmail" provider="gmail" />
        )}

        {session?.user && (
          <>
            <header className="header"></header>
            <PrettyPrintJson data={session} />
            {/* <PrettyPrintJson data={githubToken} /> */}

            <FirebaseDebugButton email={email} />

            <section className="main"></section>
          </>
        )}
      </section>
      <Footer />
    </Container>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // It's a lot of time every page.
  return ServersideSessionHandler(context);
};
