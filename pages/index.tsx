import { ServersideSessionHandler } from "lib/middleware";
import type { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Loading from "components/Loading";

const Home: NextPage<{ data: Session }> = ({ data: session }) => {
  const router = useRouter();
  // const [loading, setLoading] = useState(!!session);
  useEffect(() => {
    router.push("/dashboard");
  });

  return <Loading />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return ServersideSessionHandler(context);
};
