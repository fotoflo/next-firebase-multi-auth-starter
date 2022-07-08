import { DefaultSession } from "next-auth";
/**
 * Received as a prop on the `ThemeProvider` React Context
 */
export interface Theme {
  theme: "light" | "dark";
  themeToggler: Function;
}
