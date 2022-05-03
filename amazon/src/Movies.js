import React from 'react'
import { Carousel } from 'react-bootstrap';
import Heavy from './Assets/Most Wished for Movies AND tv/heavy.jpg';
import Lord from './Assets/Most Wished for Movies AND tv/Lord of rings.jpg';
import Moonfall from './Assets/Most Wished for Movies AND tv/moonfall.jpg';
function Movies() {
  return (
    <div>
      <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-2">
                            <h3>React Bootstrap Carousel</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Heavy}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Lord}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Moonfall}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Movies