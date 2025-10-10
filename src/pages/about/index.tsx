import React, { useRef } from 'react';
import Header from "../../components/Header";
import Intro from "../../components/AboutPage/Intro";
import Poster from "../../components/AboutPage/Poster";
import Symbols from "../../components/AboutPage/Symbols";
import Interviews from "../../components/AboutPage/Interviews";
import ThanksTo from "../../components/AboutPage/ThanksTo";
import Executives from '@/components/AboutPage/Executives';
import Sponsers from '@/components/AboutPage/Sponser';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const symbolsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white">
      <Header />
      <Intro />
      <Poster />
      <div ref={symbolsContainerRef} style={{ position: 'relative', height: '800vh' }}>
        <Symbols containerRef={symbolsContainerRef} />
      </div>
      <Interviews />
      <ThanksTo />
      <Executives />
      <Sponsers />
      <Footer />
    </div>
  )
}

export default AboutPage;