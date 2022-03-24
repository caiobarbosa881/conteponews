import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
  return (
        <IconContext.Provider value={{color:'#fff', size: 64}}> 
        <div>
        <div className='pricing__section'>
            <div className='pricing__wrapper'>
                <h1 className='pricing__heading'>Pricing</h1>
                <div className='pricing__container'>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                            <div className='icon'>
                                <BsXDiamondFill />
                            </div>
                            <h3>Iniciante</h3>
                            <h4>RS50,00</h4>
                            <p>por mês</p>
                            <ul className='pricing__container-features'>
                                <li>100 transaction</li>
                                <li>2% do dinheiro de volta</li>
                                <li>Limite de 10 mil reais</li>
                                
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor="primary">
                                Escolha o Plano
                            </Button>
                        </div>
                    </Link>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                            <div className='icon'>
                                <GiCrystalize />
                            </div>
                            <h3>Iniciante</h3>
                            <h4>RS50,00</h4>
                            <p>por mês</p>
                            <ul className='pricing__container-features'>
                                <li>100 transaction</li>
                                <li>2% do dinheiro de volta</li>
                                <li>Limite de 10 mil reais</li>
                                
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor="primary">
                                Escolha o Plano
                            </Button>
                        </div>
                    </Link>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                            <div className='icon'>
                              
                            </div>
                            <h3>Iniciante</h3>
                            <h4>RS50,00</h4>
                            <p>por mês</p>
                            <ul className='pricing__container-features'>
                                <li>100 transaction</li>
                                <li>2% do dinheiro de volta</li>
                                <li>Limite de 10 mil reais</li>
                                
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor="primary">
                                Escolha o Plano
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </IconContext.Provider>
  );
}

export default Pricing
