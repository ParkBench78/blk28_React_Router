import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
