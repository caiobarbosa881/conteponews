import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';
import { IconContext } from 'react-icons';

function NavBar() {

    const [click, setClick] = useState(false);

    const [logo, setLogo] = useState(false);

    window.addEventListener('load', () => {
        setLogo(true);
    });

    function scrollToEnd(){
        const scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }

    function scrollToStart(){
        const scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = -scrollingElement.scrollHeight;
    }

    const handleClick = () => setClick(!click);

  return (
    <>
        <div className='navbar'>
            <div className='navbar-container container' id='navbar-container-id'>
                <Link to='/' className="navbar-logo">
                    <BsNewspaper alt='Imagem de um Jornal' className={ logo ? "navbar-icon-in" : "navbar-icon-out" }/>
                    ContepoNews
                </Link>
                <IconContext.Provider value={{ color: 'white' }}>
                <div className='menu-icon' onClick={handleClick}> {click ? <FaTimes />: <FaBars />} 
                </div>
                </IconContext.Provider>                    

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' onClick={scrollToStart} className='nav-links'>
                            Página Inicial
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/Services' onClick={scrollToStart} className='nav-links'>
                            Serviços
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/Products' onClick={scrollToStart} className='nav-links'>
                            Produtos
                        </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/' onClick={scrollToEnd} className='nav-links'>
                            Mais Informações
                        </Link>              
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default NavBar;