import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';

function NavBar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);


    const scrollingElement = (document.scrollingElement || document.body); scrollingElement.scrollTop = scrollingElement.scrollHeight;

    const scrollToBottom = (id) => {
        const element = document.getElementById(id);
        element.scrollTop = element.scrollHeight;
    }

  return (
    <>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className="navbar-logo">
                    <BsNewspaper id='logo' className='navbar-icon'/>
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
                    <li className='nav-item' onClick={scrollToBottom}>
                        <Link to='/'  className='nav-links'>
                            Contatos
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default NavBar;