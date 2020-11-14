import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/about" component={About} />
        <Route path="/" component={Contacts} />
      </Switch>
      <Footer  />
    </Router>
  );
}

export default App;
