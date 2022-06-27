import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { PropsWithoutRef, SyntheticEvent } from "react";

type Props = {};

const SignOutButton = ({ session }: PropsWithoutRef<{ session: Session }>) => {
  function signOutHandler(ev: SyntheticEvent) {
    ev.preventDefault();
    signOut();
  }

  return (
    <a href={`/api/auth/signout`} onClick={signOutHandler}>
      Sign out
    </a>
  );
};

export default SignOutButton;
