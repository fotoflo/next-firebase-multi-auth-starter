import type { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import GoogleLoginButton from "components/GoogleLoginButton";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "components/NavBar";

import Theme from "types/themes";

const LoginPage: NextPage<{}> = ({
  theme,
  themeToggler,
}: {
  theme: Theme.Theme;
  themeToggler: Theme.themeToggler;
}) => {
  return (
    <Container>
      <NavBar theme={theme} themeToggler={themeToggler} />
      Login:
      <GoogleLoginButton />
    </Container>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};
