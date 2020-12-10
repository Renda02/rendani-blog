import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";


import About from "./components/pages/About";

import NavBar from "./components/NavBar";
import Body from "./components/Body";
import "./App.css";
import Contacts from "./components/pages/Contacts";
import Sidebar from "./components/Sidebar";

const theme = {
  mainPink:"#E39AA4"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar/>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contacts } />
      </Switch>
  
    </Router>
    </ThemeProvider>
  );
}

export default App;
