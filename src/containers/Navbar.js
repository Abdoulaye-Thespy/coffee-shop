
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../components/Headers';


function CollapsibleExample({user, signOut}) {
  let myuser = user.username;
  let myshop = <Header value = "CoffeeShop" />;
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='MyNav'>
      <Container fluid>
        <Navbar.Brand href="/">{myshop}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home" className='shared-font'>Home</Nav.Link>
            <Nav.Link href="/menu" className='shared-font'>Menu</Nav.Link>
            <Nav.Link href="/user" className='shared-font'>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className='shared-font user-name'>Welcome <span>{myuser}</span></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link eventKey={2} onClick={signOut} className="btn-sign-out shared-font">
               Sign Out
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CollapsibleExample;