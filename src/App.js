import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/')
  },[])
  return (
     <div className="protfolio">
      <Nav/>
      <Routes basename="/portfolio">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </div> 
  );
}

export default App;
