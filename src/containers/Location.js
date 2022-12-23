import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from '../components/Iframe';
import Button from 'react-bootstrap/Button';

export default function Presentation() {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63676.894569000266!2d9.7288192!3d4.059955199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef0b2944c7f3a14b!2sBOLO89!5e0!3m2!1sen!2scm!4v1671130607788!5m2!1sen!2scm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    return (
     <Container className='cta padding-for-mobile'>
         <Row  className=' align-items-center' xs={1} md={1} lg={2}>
            <Col>
            <div className='text-white cta-text shared-font' align="center">
                Make your Rewards merrier
                CoffeeShop® Rewards + Delta SkyMiles® have come together! Link your accounts to get 1 mile per $1* spent at Starbucks.
                <br/>
                <hr/>
                <Button variant="light">Join US</Button>{' '}
            </div>
            </Col>
            <Col>
            <Iframe iframe={iframe} />
            </Col>

         </Row>
     </Container>
    );
  }
  