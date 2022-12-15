import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import palmier from '../img/coffee-2.jpg'
import Header from '../components/Headers';
import Button from 'react-bootstrap/esm/Button';

export default function Music() {
    return (
     <>
       <Container className='news-section' >
       <Header value="Location" />
         <Row>
            <Col>
            <div className='music-picture-box'>
               <img
                className="images-on-music"
                src={palmier}
                alt="First slide"
                />
            </div>
            <div align="center">
                <h1 className='white-text music-text ' align='center'>
                        Coffee Shop, Coffee Shop, Coffee Shop
                </h1>
                <Button variant="outline-light" className='listen' align="center">Listen</Button>
            </div>

            </Col>
         </Row>
      </Container>
     </>
    );
}