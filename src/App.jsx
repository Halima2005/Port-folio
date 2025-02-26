import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
