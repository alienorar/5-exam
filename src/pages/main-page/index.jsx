import React from 'react'
import { Header,Footer } from "@layout";
import { ModelX } from '@pages';
import { useState } from 'react';
const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Header/>
      <ModelX onSlideChange={setActiveSlide} />
      <Footer activeSlide={activeSlide} />
    </div>
  );
};

export default App;

