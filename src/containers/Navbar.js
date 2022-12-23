
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../components/Headers';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
          <NavDropdown title="Menu(Categories)" className='shared-font' id="basic-nav-dropdown">
              <NavDropdown.Item href="/menu/Seafood" className='shared-font'>Seafood</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/Breakfast" className='shared-font'>Breakfast</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/Vegetarian" className='shared-font'>Vegetarian</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/Pasta" className='shared-font'>Pasta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/Miscellaneous" className='shared-font'>
              Miscellaneous
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Menu(Areas)" className='shared-font' id="basic-nav-dropdown">
              <NavDropdown.Item href="/menu/area/French" className='shared-font'>French</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/area/Italian" className='shared-font'>Italian</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/area/Indian" className='shared-font'>Indian</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/area/Chinese" className='shared-font'>Chinese</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu/area/Canadian" className='shared-font'>
              Canadian
              </NavDropdown.Item>
            </NavDropdown>
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