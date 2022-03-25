import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { GiGoldBar } from 'react-icons/gi';
import './Pricing.css';

function Pricing() {
  return (
        <IconContext.Provider value={{color:'#fff', size: 64}}> 
        <div>
        <div className='pricing__section'>
            <div className='pricing__wrapper'>
                <h1 className='pricing__heading'>Nossos Preços</h1>
                <div className='pricing__container'>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                            <div className='icon'>
                                <BsXDiamondFill />
                            </div>
                            <h3>Leitor Starter</h3>
                            <h4>RS15,00</h4>
                            <p>por mês</p>
                            <ul className='pricing__container-features'>
                                <li>Notícias em Tempo Real</li>

                                
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
                            <h3>Leitor Ativo</h3>
                            <h4>RS20,00</h4>
                            <p>por mês</p>
                            <ul className='pricing__container-features'>
                               <li>Notícias em Tempo Real</li>
                                <li>Indique Temas de notícias</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor="primary">
                                Escolha o Plano
                            </Button>
                        </div>
                    </Link>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className='pricing__container-cardInfo'>
                            <div className='icon'>
                              <GiGoldBar />
                            </div>
                            <h3>Leitor Golden Plus</h3>
                            <h4>RS25,00</h4>
                            <p>por mês</p>
                            <ul className='pricing__container-features'>
                            <li>Notícias em Tempo Real</li>
                                <li>Indique Temas de notícias</li>
                                <li>Seu nome na lista de assinantes </li>
                                
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
