import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./App.css";
import Contact from "./components/Contact";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Form />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
