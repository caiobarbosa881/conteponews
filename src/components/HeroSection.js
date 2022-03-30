import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css'; 
import { useState, useEffect } from 'react';

function HeroSection({
    lightBg,
     topLine,
      lightText,
      lightTextDesc,
        headline,
        img,
         description,
          buttonLabel,
            alt,
             imgStart, 
               animation,       
}) {
    function scrollToTop(){
        window.scroll.To(0,0);
    }

    const [hero, setHeroAnimation] = useState(animation);

    useEffect(() => {
        setHeroAnimation(false);
      });


  return (
      <>
    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className="container">
            <div className='row home__hero-row'style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className='col'>
                        <div className={hero ? 'home__hero-text-wrapper-out' : 'home__hero-text-wrapper'}>
                            <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                        <Link to="/services" onClick={scrollToTop}>
                        <Button>{buttonLabel}</Button>
                        </Link>
                            </div>
                        </div>
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
                        <img src={img} alt={alt} className="home_hero-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default HeroSection