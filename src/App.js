import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Main';
import Characters from './Components/Characters';
import NavCompleto from './Components/NavCompletoS';
import Carrusel from './Components/Carrusel';
import './Components/Formulario';
import Footer from './Components/Footer';
import AnimePage from './Components/AnimePage';
import UserPage from './Components/UserPage'
import Inicio from './Components/Inicio';
import Video from './Components/Video';

function App() {
  return (
    <div >
      <NavCompleto />
      <div className='carousel'>
      <Carrusel />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} ></Route>
          <Route path="/rickandmorty" element={<Mainpage />} ></Route>
          <Route path="/characters/:id" element={<Characters />} ></Route>
          <Route path="/suscriptores" element={<UserPage />} ></Route>
          <Route path="/animes" element={<AnimePage />} ></Route>
        </Routes>
      </BrowserRouter>
      <div id='videosection'>
      <Video />
      </div>
      <Footer />
    </div>
  );
}
export default App;