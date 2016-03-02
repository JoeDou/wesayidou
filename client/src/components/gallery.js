import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

import { imageLocation } from '../constants/constants'

const carouselItem = imageLocation.map( (location, index) => {
  return (
    <CarouselItem key={index}>
      <div className="carousalImgContainer">
        <img className="carousalImg" src={location}/>
      </div>
    </CarouselItem>
  )
})

export default () => {
  return(
    <Carousel indicators={false} >
      {carouselItem}
    </Carousel>
  )
}
