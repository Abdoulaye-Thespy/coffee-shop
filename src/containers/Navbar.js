
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'bootstrap';


function CollapsibleExample({user, signOut}) {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CoffeeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Menu</Nav.Link>
            <Nav.Link href="/user">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Welcome {user.username}</Nav.Link>
            <Nav.Link eventKey={2} onClick={signOut}>
              Sign out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CollapsibleExample;