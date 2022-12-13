import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import coffee from '../img/coffee-2.jpg'

export default function News() {
    return (
     <>
       <Container className='news-section' >
         <Row xs={1} md={1} lg={2}>
            <Col>
              <img
                className="d-block w-100 images-on-news"
                src={coffee}
                alt="First slide"
                />
            </Col>
            <Col>
              <div className='about-resume'>
                  <h1 className='text-white montserat-font'>WHO WE ARE</h1>
                  <p className='text-white montserat-font' align="center">
                  WE are small independent coffee shops in DOUALA. 
                  We believe in combining the best coffee with the best customer 
                  service and it is our aim to be at the heart of every community we open in.
                  </p>
                  <a href='/about'>  <Button variant="outline-light" className='continue-reading montserat-font'>Our Menu</Button></a>
              </div>
               
            </Col>
         </Row>
         <Row>
             <Col>
                <div align="center" className='button-about-me'>
                    <a href='/about'><Button variant="outline-danger">Get In Touch</Button></a>
                </div>
             </Col>
         </Row>
      </Container>
     </>
    );
}