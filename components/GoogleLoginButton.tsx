import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";
import styled from "styled-components";

type props = {
  text: string;
};

const GoogleLoginButton: React.FC = ({ text }: props) => {
  if (!text) {
    text = "Login With Google";
  }
  return (
    <GoogleButton onClick={() => signIn("google")}>
      <FaGoogle /> {text}
    </GoogleButton>
  );
};

const GoogleButton = styled(Button)`
  display: block;
  margin: 10px 0px;
`;

export default GoogleLoginButton;
