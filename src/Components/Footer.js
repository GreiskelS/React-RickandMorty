import React from 'react'
import './css/Footer.css';

const Footer = () => {
  return (

    <div className="containerFooter">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/Inicio" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="/RickandMorty" className="nav-link px-2 text-body-secondary">Rick and Morty</a></li>
          <li className="nav-item"><a href="/animes" className="nav-link px-2 text-body-secondary">Animes</a></li>
          <li className="nav-item"><a href="/suscriptores" className="nav-link px-2 text-body-secondary">Suscriptores</a></li>
        </ul>
        <p id='footer' className="text-center text-body-secondary">&copy; 2023 Morty's Anime World ©</p>
      </footer>
    </div>

  );
}
export default Footer;