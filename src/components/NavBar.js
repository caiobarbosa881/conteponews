import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';

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

    const handleClick = () => setClick(!click);

  return (
    <>
        <div className='navbar'>
            <div className='navbar-container container' id='navbar-container-id'>
                <Link to='/' className="navbar-logo">
                    <BsNewspaper className={ logo ? "navbar-icon-in" : "navbar-icon-out" }/>
                    ContepoNews
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Página Inicial
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links'>
                            Serviços
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links'>
                            Produtos
                        </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/' className='nav-links' onClick={scrollToEnd}>
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