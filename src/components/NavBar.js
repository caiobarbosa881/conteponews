import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';

function NavBar() {
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click);

  return (
    <>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className="navbar-logo">
                    <BsNewspaper className='navbar-icon'/>
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
                        <Link to='/Services/Services' className='nav-links'>
                            Serviços
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/products' className='nav-links'>
                            Produtos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links'>
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