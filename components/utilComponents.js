import React from "react";

import { consoleObj } from "../lib/utils";

import { Button } from "react-bootstrap";

import { webConfig } from "../next.config";

import styled from "styled-components";

export const DebugButton = (props) => {
  const debug = () => {
    consoleObj(props);
  };

  return (
    <>
      {webConfig.ENV === "dev" && (
        <Button onClick={() => debug()}>&nbsp; Debug</Button>
      )}
    </>
  );
};

export const PrettyPrintJson = ({ data }) => {
  // (destructured) data could be a prop for example

  if (webConfig.env !== "dev") return;

  return (
    <Root>
      <Pre>{JSON.stringify(data, null, 2)}</Pre>
    </Root>
  );
};

const Pre = styled.pre`
  display: block;
  padding: 10px 30px;
  margin: 0;
`;

const Root = styled.div`
  font-size: 12px;
`;
