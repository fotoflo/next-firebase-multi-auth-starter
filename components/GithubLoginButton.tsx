import React from "react";

import { signIn } from "next-auth/react";
import { Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const GithubLoginButton: React.FC = () => {
  return (
    <>
      <GithubButton onClick={() => signIn("github")}>
        <FaGithub /> Sign In with Github
      </GithubButton>
    </>
  );
};

const GithubButton = styled(Button)`
  display: block;
  margin: 10px 0px;
`;

export default GithubLoginButton;
