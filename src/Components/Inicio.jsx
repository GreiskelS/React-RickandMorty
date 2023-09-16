import React from 'react'
import { Link } from 'react-router-dom';
import './css/Inicio.css';

const Inicio = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Inicio"></Link>
          </li>
          <li>
            <Link to="/RickandMorty"></Link>
          </li>
          <li>
            <Link to="/suscriptores"></Link>
          </li>
          <li>
            <Link to="/animes"></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Inicio