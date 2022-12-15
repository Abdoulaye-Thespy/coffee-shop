import React from 'react';
import Card from '../components/Card'
import { Container } from 'react-bootstrap';
import News from '../containers/News';
export default function HomePage() {
return (
        <>  
            <News />
            <Container>
                <Card></Card>
            </Container>
        </>
   );
}