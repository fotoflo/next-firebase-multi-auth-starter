import { createGlobalStyle } from "styled-components";
// from https://www.youtube.com/watch?v=G00V4tRx1ME

export const lightTheme = {
  background: "white",
  fontColor: "#000", // black
  InfoBGColor: "ivory",
  0: "white", // White, Blank
  1: "grey", // not in word, grey
  2: "#EAB935", // wrong slot, yellow
  3: "#61C211", // correct slot, gren
};

export const darkTheme = {
  background: "black",
  fontColor: "#fff", // white
  InfoBGColor: "#240026",
  0: "black", // black, Blank
  1: "grey", // not in word, grey
  2: "#EAB935", // wrong slot, yellow
  3: "#61C211", // correct slot, green
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
    caret-color: transparent;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      user-select:none;
	}
`;
