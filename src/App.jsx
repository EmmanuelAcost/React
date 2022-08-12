import { IntlProvider } from "react-intl";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routers/router";

function App(props) {
  return (
    <IntlProvider>
      <Router>
        <Routes />
      </Router>
    </IntlProvider>
  );
}

export default App;
