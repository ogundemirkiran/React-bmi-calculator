import "./App.css";
import HeadNavbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import BMI from "./pages//BMI/index";

function App() {
  return (
    <div className="App">
      <HeadNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/BMI" element={<BMI />}></Route>
      </Routes>
    </div>
  );
}

export default App;
