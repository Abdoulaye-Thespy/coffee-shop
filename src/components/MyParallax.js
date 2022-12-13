import { Parallax } from 'react-parallax';
import Coffee from '../img/coffee-2.jpg'

export default function MyParallax () {
  return (
    <Parallax className='img-parallax' bgImage={Coffee} bgImageAlt="the cat" strength={600}>

    </Parallax>
  );
}