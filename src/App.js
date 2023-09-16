import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
     <div className="protfolio w-100">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
     </div> 
  );
}

export default App;
