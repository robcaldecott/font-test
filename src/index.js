import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import App from "./App";
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"IBM Plex Sans"', "Roboto", "Arial", "sans-serif"],
  },
  palette: {
    background: {
      default: "#eee",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
  </ThemeProvider>,
  document.getElementById("root")
);
