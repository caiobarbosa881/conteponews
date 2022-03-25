import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from './Data';
import Footer from '../Footer/Footer';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Products;