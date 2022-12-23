import React from 'react';
import News from '../containers/News';
import Presentation from '../containers/Presentation';
import ShopLocation from '../containers/Location';

export default function AboutMe() {
  return (

    <div className='body'>
    <Presentation />
    <News />  
    <ShopLocation />  
    </div>
  ); 
}
