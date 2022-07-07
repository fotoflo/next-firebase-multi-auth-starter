import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

import { DEFAULT_THEME } from "next.config";

import { darkTheme, GlobalStyles, lightTheme } from "components/Themes";

import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log("toggling");
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CloudPoacher</title>
      </Head>
      <GlobalStyles theme={theme == "light" ? lightTheme : darkTheme} />
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <Component {...pageProps} theme={theme} themeToggler={themeToggler} />
      </ThemeProvider>
    </>
  );
}
