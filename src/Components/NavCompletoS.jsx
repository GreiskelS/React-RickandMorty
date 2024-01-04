import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/NavCompleto.css';

function NavCompletoS() {
  return (
    <div id="navCom">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fluidcontent'>
        <div>
          <img id="logo" src="https://miro.medium.com/v2/resize:fit:840/1*d5g31wvUpmILqzge216Fug.png" alt="logo" />
        </div>
        <Container className='fluid'>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/rickandmorty">Rick and Morty</Nav.Link>
              <Nav.Link href="/animes">Anime's</Nav.Link>
              <Nav.Link href="/suscriptores">Subscribers</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavCompletoS;
