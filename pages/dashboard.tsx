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
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import Footer from "components/Footer";
import { useMemo } from "react";
import { useRouter } from "next/router";
import GoogleLoginButton from "components/GoogleLoginButton";
import GithubLoginButton from "components/GithubLoginButton";
import SignOutButton from "components/SignOutButton";
import Avatar from "components/Avatar";
import { Container } from "react-bootstrap";
import NavBar from "components/NavBar";

const Dashboard: NextPage<{ data: Session & { id: string }; todos: any[] }> = ({
  data: session,
}) => {
  const router = useRouter();
  // const [loading, setLoading] = useState(!!session);

  const email = useMemo(() => session?.user?.email ?? "", [session]);
  console.log("email ", email);
  return (
    <Container>
      {/* <Loading block={loading} /> */}

      <NavBar session={session} />
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
    </Container>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // It's a lot of time every page.
  const session = await getSession(context);
  // const todoRefs = session
  //   ? await getTodoRefs((session?.user?.email as string) ?? "")
  //   : [];

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: {
      data: session,
    },
  };
};
