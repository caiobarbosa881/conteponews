import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';
import Footer from '../Footer/Footer';
import Pricing from '../../Pricing';

function Products() {
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

export default Products;