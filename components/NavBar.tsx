import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { Session } from "next-auth-custom/types";
import { Col, Nav, Navbar } from "react-bootstrap";
import Avatar from "./Avatar";
import SignOutButton from "./SignOutButton";
import GoogleLoginButton from "./GoogleLoginButton";

import ThemeToggleSwitch from "./ThemeToggleSwitch";
import { DEFAULT_THEME } from "../next.config";

function NavBar({
  session,
  theme,
  themeToggler,
}: {
  session: Session;
  theme: any;
  themeToggler: any;
}) {
  const getDefaultThemeToggleSwitchColor = () => {
    return DEFAULT_THEME === "light" ? true : false;
  };

  return (
    <StyledNavbar variant={theme}>
      <Col md={1}>
        <h1>CloudPoacher!</h1>
      </Col>
      <Col md={9}></Col>
      <ThemeToggleSwitch
        defaultValue={getDefaultThemeToggleSwitchColor()}
        toggleFn={themeToggler}
      />
      <Col className="my-auto" md={1}>
        {session && <SignOutButton />}
      </Col>
      <Col md={1}>
        {session && (
          <Link href="/settings" passHref>
            <a>
              <Avatar src={session?.user?.image} />
            </a>
          </Link>
        )}
        {!session && <GoogleLoginButton prompt="Login" />}
      </Col>
    </StyledNavbar>
  );
}

const StyledNavbar = styled(Navbar)`
  border-bottom: 1px solid ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.fontColor};
  left: 50%;
  transform: translatex(-50%);
  width: 95%;
  margin-bottom: 2rem;
`;

export default NavBar;
