import React from "react";

import { Session } from "next-auth";
import { Col, Row, Nav } from "react-bootstrap";
import Avatar from "./Avatar";
import SignOutButton from "./SignOutButton";

function NavBar({ session }) {
  return (
    <Nav>
      <Col md={1}>
        <h1>CloudHunter!</h1>
      </Col>
      <Col md={8}></Col>
      <Col className="my-auto" md={2}>
        <SignOutButton />
      </Col>
      <Col md={1}>
        <Avatar src={session?.user?.image} />
      </Col>
    </Nav>
  );
}

export default NavBar;
