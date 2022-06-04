import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css';


function NavBar() {
    return (
      <Navbar className="miNavbar primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
          <img
          alt=""
          src="logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Not Montagne</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Camping</NavDropdown.Item>
                <NavDropdown.Item href="#">Pesca</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Ropa Hombre</NavDropdown.Item>
                <NavDropdown.Item href="#">Ropa Mujer</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">La empresa</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget contador={'1'} />
        </Container>
      </Navbar>
    );
  }

export default NavBar;