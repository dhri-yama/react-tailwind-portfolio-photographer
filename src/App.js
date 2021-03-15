import React from 'react';
import About from './components/About';
import Services from './components/Services';
import { useRef,useState } from "react";
import Weddings from './components/Weddings';
import Contactme from './components/Contactme';

function App() {
  const images = useRef(['/assets/images/pre-wedding.jpg','/assets/images/wedding.jpg','/assets/images/fashion.jpg'])
  console.log(images)

  return (
    <div className="App">
      <Services images={images}/>
      <About/>
      <Weddings/>
      <Contactme/>
    </div>
  );
}

export default App;
