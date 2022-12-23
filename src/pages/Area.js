import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import News from '../containers/News';
import { API } from 'aws-amplify';
import Spiner from '../components/Spiner';
import { Container } from 'react-bootstrap';
// import { type } from '@testing-library/user-event/dist/type';


export default function HomePage() {

   const [menu, setMenu] = useState([]);
   const [isLoading, setIsLoading] = useState(true)
   let url = useLocation().pathname; 
   let pathArray = url.split("/")
   let path = pathArray[3]

   useEffect( ()=>{
       let data=[];
       async function fetchData () {
        data = await API.get('menu', `/menu/area/${path}`);
        console.log(data)
        setMenu(data);
        setIsLoading(false);
       }

       fetchData()
        },[])


return (
        <>  
        <Container fluid >
          {isLoading ? <Spiner /> : menu.map(item => <News key={item.idMeal} title={item.strMeal} 
          picture={item.strMealThumb}
          mykey={item.idMeal}
          />) }
        </Container>
            
            
        </>
   );
}