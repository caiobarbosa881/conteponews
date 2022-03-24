import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Footer from '../Footer/Footer';
import Pricing from '../../Pricing';

function Home() {
  
  return (
    <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} /> 
        <HeroSection {...homeObjThree} /> 
        <HeroSection {...homeObjFour} /> 
        <Pricing />
        <Footer />
    </>
  );
}

export default Home