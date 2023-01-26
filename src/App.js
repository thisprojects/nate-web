import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
