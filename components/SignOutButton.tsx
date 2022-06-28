import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutButton: React.FC = () => {
  return (
    <Button
      variant="secondary"
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
