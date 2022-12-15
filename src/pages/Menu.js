import React from 'react';
import Card from '../components/Card'
import MyParallax from '../components/MyParallax'
import Header from '../components/Headers';
import { Container } from 'react-bootstrap';
export default function HomePage() {
return (
        <>
            <div className='slides-show'>
                <MyParallax />  
            </div>
            <Header value="Our Menu"/>
            <Container>
                <Card></Card>
            </Container>
        </>
   );
}