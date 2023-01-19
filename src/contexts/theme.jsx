import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#774d1f",
      light: "#988344",
      dark: "#482500",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ede9de",
      light: "#ffffee",
      dark: "#bbb7ac",
      contrastText: "#000000",
    },
    text: {
      primary: "#000",
      secondary: "#000",
      disabled: "#555",
    },
  },
});

export const ThemeContext = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
