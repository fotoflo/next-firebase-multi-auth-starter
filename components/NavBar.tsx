import React from "react";

import { Session } from "../lib/types";
import { Col, Nav } from "react-bootstrap";
import Avatar from "./Avatar";
import SignOutButton from "./SignOutButton";
import GoogleLoginButton from "./GoogleLoginButton";

function NavBar({ session }: { session: Session }) {
  return (
    <Nav>
      <Col md={1}>
        <h1>CloudPoacher!</h1>
      </Col>
      <Col md={9}></Col>
      <Col className="my-auto" md={1}>
        {session && <SignOutButton />}
      </Col>
      <Col md={1}>
        {session && <Avatar src={session?.user?.image} />}
        {!session && <GoogleLoginButton prompt="Login" />}
      </Col>
    </Nav>
  );
}

export default NavBar;
