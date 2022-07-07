import { getSession } from "next-auth/react";

export const ServersideSessionHandler: GetServerSideProps = async (context) => {
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
