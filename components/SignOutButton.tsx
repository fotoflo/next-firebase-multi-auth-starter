import React from "react";
import styled from "styled-components";
import { signOut } from "next-auth/react";
import { Button } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutButton: React.FC = () => {
  return (
    <SignoutButton
      variant="secondary"
      onClick={() => {
        signOut();
      }}
    >
      <FaSignOutAlt />
      Sign out
    </SignoutButton>
  );
};

const SignoutButton = styled(Button)`
  margin-right: 10px;
  width: 100%;
`;

export default SignOutButton;
