import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import cta from '../img/coffee-3.png'

export default function Presentation() {
    return (
     <Container className='padding-for-mobile'>
         <Row  className='cta align-items-center' xs={1} md={1} lg={2}>
            <Col>
            <img
                className="d-block w-100 images-on-news"
                src={cta}
                alt="First slide"
                />

            </Col>
            <Col>
            <div className='text-white cta-text shared-font' align="center">
            Make your Rewards merrier
            CoffeeShop® Rewards + Delta SkyMiles® have come together! Link your accounts to get 1 mile per $1* spent at Starbucks.
            <br/>
            <hr/>
            <Button variant="light">Join US</Button>{' '}
            </div>
            </Col>

         </Row>
     </Container>
    );
  }
  

