import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Red from "./components/Red.jsx";
import Orange from "./components/Orange.jsx";
import Yellow from "./components/Yellow.jsx";
import Green from "./components/Green.jsx";
import Blue from "./components/Blue.jsx";
import Indigo from "./components/Indigo.jsx";
import Violet from "./components/Violet.jsx";

function App() {
  return (
    <div id="container">
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/red" element={<Red />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/yellow" element={<Yellow />} />
          <Route path="/green" element={<Green />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/indigo" element={<Indigo />} />
          <Route path="/violet" element={<Violet />} />
        </Routes>
      </div>
      <footer id="navbar">
        <Link className="home-link" to="/">
          Home
        </Link>

        <Link className="red-link" to="/red">
          Red
        </Link>

        <Link className="orange-link" to="/orange">
          Orange
        </Link>

        <Link className="yellow-link" to="/yellow">
          Yellow
        </Link>

        <Link className="green-link" to="/green">
          Green
        </Link>

        <Link className="blue-link" to="/blue">
          Blue
        </Link>

        <Link className="indigo-link" to="/indigo">
          Indigo
        </Link>

        <Link className="violet-link" to="/violet">
          Violet
        </Link>
      </footer>
    </div>
  );
}

export default App;
