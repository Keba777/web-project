import React from 'react';
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Features from './components/Features';
import Footer from './components/Footer';
import Questions from './components/Questions';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Banner/>
      <Features/>
      <Questions/>
      <Footer/>
    </div>
  );
}

export default App;
