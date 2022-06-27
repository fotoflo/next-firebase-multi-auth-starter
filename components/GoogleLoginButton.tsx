import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";
import styled from "styled-components";

const GoogleLoginButton: React.FC = () => {
  return (
    <GoogleButton onClick={() => signIn("google")}>
      <FaGoogle /> Login with Google
    </GoogleButton>
  );
};

const GoogleButton = styled(Button)`
  display: block;
  margin: 10px 0px;
`;

export default GoogleLoginButton;
