import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nós</h2>
            <Link to='/'>Como Funciona</Link>
            <Link to='/'>Depoimentos</Link>
            <Link to='/'>Carreiras</Link>
            <Link to='/'>Termos de Serviços</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Nos Contate</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>Destinos</Link>
            <Link to='/'>Patrocínios</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Mandar Vídeo</Link>
            <Link to='/'>Embaixadores</Link>
            <Link to='/'>Agência</Link>
            <Link to='/'>Influenciadores</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Páginas</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <BsNewspaper className='navbar-icon' />
              CONTEPONEWS
            </Link>
          </div>
          <small className='website-rights'>CONTEPONEWS © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                ''
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;