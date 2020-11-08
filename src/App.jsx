import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Navbar />
        <Body />
      </div>
    </Router>
  );
}

export default App;
