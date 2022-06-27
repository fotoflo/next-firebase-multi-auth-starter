import type { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage<{ data: Session & { id: string }; todos: any[] }> = ({
  data: session,
}) => {
  const router = useRouter();
  // const [loading, setLoading] = useState(!!session);
  useEffect(() => {
    router.push("/dashboard");
  });
};

export default Home;

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
