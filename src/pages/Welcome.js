import React from 'react';
import MyParallax from '../components/MyParallax'
import Header from '../components/Headers';
import Slides from '../containers/Caroussel'
import News from '../containers/News';
import Text from '../components/Text';

export default function AboutMe() {
  return (

    <div className='body'>
    {/* <div className='slides-show'>
    <Slides />
    </div>
     */}
    {/* <Header value='Our Shop'/> */}
    <News />
    <MyParallax />
    <Text />
    
    </div>
  );
}
