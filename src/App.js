import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "theme";
import Routes from "routes";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
