import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";


import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

const theme = {
  mainPink:"#E39AA4"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
  
    </Router>
    </ThemeProvider>
  );
}

export default App;
