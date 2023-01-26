import "./App.css";

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Search from "./components/Search";

import Download from "./components/Download";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
};

export default App;
