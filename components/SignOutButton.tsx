import { signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutButton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      <FaSignOutAlt />
      Sign out
    </Button>
  );
};

export default SignOutButton;
