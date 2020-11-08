import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Navbar />
        <Body />
        <Contact />
        <Footer />
        <About />
        <Contacts />
      </div>
    </Router>
  );
}

export default App;
