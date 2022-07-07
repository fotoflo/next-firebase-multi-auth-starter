import React, { useState, useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";

import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { DebugButton, PrettyPrintJson } from "components/utilComponents";
import Avatar from "components/Avatar";
import { ServersideSessionHandler } from "lib/middleware";
import { webConfig } from "next.config";

function Settings({ data: session }) {
  return (
    <Container>
      <Link href="/dashboard">back</Link>
      <div>
        <p>Githunter Version: {process.env.REACT_APP_VERSION}</p>
        <p>Settings</p>
        {/* <DebugButton authUser={authUser} /> */}
        <p>host: {webConfig.env} </p>
      </div>
      <PrettyPrintJson data={session} />
    </Container>
  );
}

const GithubAvatar = styled(Avatar)`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export default Settings;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return ServersideSessionHandler(context);
};
