import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#fff",
			light: "#988344",
			dark: "#482500",
			contrastText: "#996857",
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

theme = responsiveFontSizes(theme);

export const ThemeContext = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
