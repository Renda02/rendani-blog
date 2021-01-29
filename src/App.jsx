import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import About from "./components/pages/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Body from "./components/Body";
import ScrollTop from "./components/ScrollTop";
import "./App.css";
import Contacts from "./components/pages/Contacts";

const theme = {
  mainPink: "#E39AA4",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollTop />
        <Home />
        <Switch>  <Route path="/projects" component={Projects} />
          <Route exact path="/" component={Body} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contacts} />
        
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
