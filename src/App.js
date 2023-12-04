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
console.log("HIIIIIertdrgfh");
    navigate('/');
  console.log("HIIIII");
  },[])
  return (
     <div className="protfolio">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </div> 
  );
}

export default App;
