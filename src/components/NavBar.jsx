import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';


function NavBar() {
    return (
      <Navbar className="miNavbar primary sticky-top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  as={Link} to="/">
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
                <NavDropdown.Item  as={Link} to="/category/MLA417985">Botas</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/category/MLA429175">Remeras Térmicas</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/category/MLA455552">Cuellos y Balaclavas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">La empresa</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    );
  }

export default NavBar;