import React from 'react';
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import JoinWaitList from './components/JoinWaitList';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <JoinWaitList/>
    </div>
  );
}

export default App;
