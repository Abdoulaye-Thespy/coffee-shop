import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="aboutus">Coffee Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/aboutus">Home</Nav.Link>
            <Nav.Link href="/home">Menu</Nav.Link>
            <Nav.Link href="/store">Online Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;