import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopSection/>
      {/*Body */}
      <Footer />
    </div>
  );
}

export default App;
