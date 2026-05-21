import React from "react";
import "./App.css";
import Navbar from  "./components/Navbar";
import Home from  "./components/Home";
import About from  "./components/About";
import Skills from  "./components/Skills";
import Certifications from  "./components/Certifications";
import Education from  "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from  "./components/Footer";
// import Counter from "./components/Counter";
// import Datanew from "./components/Datanew";
// import Data from "./components/Data";



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Certifications/>
    <Contact/>
    <Footer/>
     {/* <Counter/>  */}
    {/* <Datanew/>  */}
     {/* <Data/>  */}

     </>
  )
}

export default App;