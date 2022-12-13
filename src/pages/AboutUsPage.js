import React from 'react';
import MyParallax from '../components/MyParallax'
import Header from '../components/Headers';
import Slides from '../containers/Caroussel'
import News from '../containers/News';
import Text from '../components/Text';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';

export default function AboutMe() {
  return (

    <div className='body'>
    <div className='slides-show'>
    <Slides />
    </div>
    
    <Header value='About Us'/>
    <News />
    <MyParallax />
    <Text/>
    <Container>
     <Row>
        <Col className='text-about-me'>
        </Col>
     </Row>
    </Container>
    
    </div>
  );
}
