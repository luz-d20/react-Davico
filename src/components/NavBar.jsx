import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css';


function NavBar() {
    return (
      <Navbar className="miNavbar primary sticky-top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
          <img
          alt=""
          src="logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        !Montagne</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/MLA417985">Botas</NavDropdown.Item>
                <NavDropdown.Item href="/category/MLA429175">Remeras Térmicas</NavDropdown.Item>
                <NavDropdown.Item href="/category/MLA455552">Cuellos y Balaclavas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">La empresa</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget contador={'1'} />
        </Container>
      </Navbar>
    );
  }

export default NavBar;