import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import coffee from '../img/burger.jpg'

export default function News({mykey, title, picture}) {
    return (
     <>
       <Container className='news-section' >
         <Row xs={1} md={1} lg={2}>
            <Col className='align-items-center'>
              <img
                className="d-block w-100 images-on-news"
                src={picture}
                alt="First slide"
                />
            </Col>
            <Col>
              <div className='about-resume'>
                  <h1 className='text-white montserat-font'>{title}</h1>
                  <p className='text-white montserat-font' align="center">
                  We are small independent coffee shops in DOUALA. 
                  We believe in combining the best coffee with the best customer 
                  service and it is our aim to be at the heart of every community we open in.
                  </p>
                  <a href={"/"+ mykey} >  <Button variant="outline-light" className='continue-reading montserat-font'>Order Now</Button></a>
              </div>
               
            </Col>
         </Row>
      </Container>
     </>
    );
}