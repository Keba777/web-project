import React from 'react';
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import JoinWaitList from './components/JoinWaitList';
import Features from './components/Features';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <JoinWaitList/>
      <Features/>
    </div>
  );
}

export default App;
