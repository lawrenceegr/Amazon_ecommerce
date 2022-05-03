import React from 'react';
import Toys from './Assets/Toys.jpg'
import Products from './Assets/products.jpg';
import Beauty from './Assets/Beauty.jpg';
import Refresh from './Assets/Refresh.jpg';
import Perfect from './Assets/PerfectForce.jpeg';
import {Carousel} from 'react-bootstrap';


function Home() {
  return (
    <div>
            <Carousel>
       <Carousel.Item>
    <img
      className="d-block w-100 "
      src={Toys}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={Perfect}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={Products}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={Refresh}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={Beauty}
      alt="Third slide"
    />

    
  </Carousel.Item>
 </Carousel>
    </div>
  )
}

export default Home