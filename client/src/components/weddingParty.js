import React from 'react'
import { Component } from 'react'

import HalfBlockView from './halfBlockView'
import FullBlockView from './fullBlockView'

export default class extends Component {

  render() {
    return (
      <div>
        <HalfBlockView
          text="Ceremony"
          url="/assets/images/WeddingDay-h1.jpg"
          position="40% 30%"
          dark={true}
        />
        <div className="text-view center-text">

        test
        test
        </div>
        <FullBlockView
          text="Reception"
          url="/assets/images/WeddingDay-h2.jpg"
          dark={true}
        />
        <div className="text-view center-text">
          <h2>Mill Valley Community Center</h2>
          <h4>180 Camino Alto</h4>
          <h4>Mill Valley, CA 94941</h4>
          <br/>
          <h4>Cocktail hour will start at 5:30 PM</h4>
          <h4>Buffet-style dinner to start at 6:45 PM</h4>
          <h4>Drinks, dancing and wedding festivities until 11:00 PM</h4>
          <br/><br/>
          <h4>Background</h4>
          <p>Located 10 miles north of the Chapel of Our Lady, it is a short 16 minute drive across the Golden Gate Bridge. However, please 
          allow for extra time, just in case (Bay Area traffic, you never know!).</p>
          <br/>
          <h4>Parking</h4>
          <p>Free</p>
        </div>
      </div>
    )
  }
}
