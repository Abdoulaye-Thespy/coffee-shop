import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spiner from '../components/Spiner';


export default function UserPage() {
let { id } = useParams();
let [photo, setPhoto] = useState();
let [details, setDetails] = useState({});
let [dish, setDish] = useState();
const [isLoading, setIsLoading] = useState(true)
useEffect( ()=>{
    let data=[];
    async function fetchData () {
     data = await API.get('menu', `/menu/detail/${id}`);
     console.log(data)
     setPhoto(data[0].strMealThumb)
     setDish(data[0].strMeal)
     setDetails(data[0])
     setIsLoading(false);
    }

    fetchData()
     },[])
return (
    <>
    {isLoading ? <Spiner /> :
    <Container className='news-section' >
      <Row xs={1} md={1} lg={2}>
         <Col className='align-items-center'>
           <img
             className="d-block w-100 images-on-news"
             src={photo}
             alt="First slide"
             />
         </Col>
         <Col>
           <div className='about-resume'>
               <h1 className='text-white montserat-font'>{dish}</h1>
               <p className='text-white montserat-font' align="center">
                   Main Ingredients
               </p>
               <ul>
                   <li className='text-white'>
                      {details.strIngredient1}
                   </li>
                   <li className='text-white'>
                      {details.strIngredient2}
                   </li>
                   <li className='text-white'>
                      {details.strIngredient3}
                   </li>
                   <li className='text-white'>
                      {details.strIngredient4}
                   </li>
               </ul>
               <a href={"/"+ id}>  <Button variant="outline-light" className='continue-reading montserat-font'>Confirm order</Button></a>
           </div>
            
         </Col>
      </Row>
   </Container>
}
  </>
);
}