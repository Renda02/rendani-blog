import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    <Contact/>
      <Footer />
    </div>
  );
}

export default App;
