import Carousel from 'react-bootstrap/Carousel';
import './css/Carrusel.css';

export default function Carrusel() {
  return (
    <div id='Carouselmain'>
    <Carousel slide={false} className='Carouselmain'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.xtrafondos.com/wallpapers/resoluciones/20/rick-y-morty-fanart-2020_1920x1080_6344.jpg"
          alt="first slide"
        />
        <Carousel.Caption>
        <h3>Morty's Anime World</h3>
          <p>Latest News</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.zerochan.net/Cowboy.Bebop.full.1107118.jpg"
          alt="second slide"
        />

        <Carousel.Caption>
          <h3>Morty's Anime World</h3>
          <p>Latest News</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fondosmil.com/fondo/27334.jpg"
          alt="third slide"
        />

        <Carousel.Caption>
        <h3>Morty's Anime World</h3>
          <p>Latest News</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

