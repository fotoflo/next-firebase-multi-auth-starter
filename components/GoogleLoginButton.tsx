import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";
import styled from "styled-components";

type ButtonProps = {
  prompt?: string;
  provider?: "google" | "gmail";
};

const GoogleLoginButton: React.FC<ButtonProps> = ({
  prompt,
  provider = "google",
}) => {
  if (!prompt) {
    prompt = "Login With Google";
  }
  return (
    <GoogleButton onClick={() => signIn("google")}>
      <FaGoogle /> {prompt}
    </GoogleButton>
  );
};

const GoogleButton = styled(Button)`
  display: block;
  margin: 10px 0px;
`;

export default GoogleLoginButton;
