import React from 'react'
import { Component } from 'react'

import FullBlockView from './fullBlockView'

export default class extends Component {

  render() {
    return (
      <div>
        <FullBlockView
          text="September 3, 2016"
          url="/assets/images/Title-h1.jpg"
          position="40% 30%"
          dark={true}
        />
        <FullBlockView
          text="Ceremony"
          url="/assets/images/WeddingDay-h1.jpg"
          position="40% 30%"
          dark={true}
        />
        <div className="text-view center-text">
          <h2>Chapel of Our Lady in the Presidio</h2>
          <h4>49 Moraga Avenue</h4>
          <h4>San Francisco, CA 94129</h4>
          <br/>
          <h4>Ceremony will start promptly at 4:00 PM</h4>
          <br/><br/>
          <h3>Background</h3>
          <p>The Chapel was built in 1864 and was the Presidio’s first house of worship. Several generations of military personnel 
          attended services in this non-denominational chapel.</p>
          <br/><br/>
          <h3>Parking</h3>
          <p>$1.20-1.80 per hour; there is plenty of parking but if there is a Presidio event, it might be limited. We will keep 
          you posted. If you want to leave your car here to carpool with someone or uber/lyft for the reception, pay until 6 PM and leave the 
          tag in the car. Please allow for time to find parking and carpool if possible--it’s more fun!</p>
          <br/>
          <p><a href="http://www.presidio.gov/transportation/Pages/Driving-and-Parking.aspx">Click here</a> for more information on parking in the Presidio</p>
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
          <h4>Drinks, dancing and wedding festivities until 11:00 PM</h4>
          <br/><br/>
          <h3>Background</h3>
          <p>Located 10 miles north of the Chapel of Our Lady, it is a short 16 minute drive across the Golden Gate Bridge. However, please 
          allow for extra time, just in case (Bay Area traffic, you never know!).</p>
          <br/>
          <h3>Parking</h3>
          <p>Free</p>
        </div>
      </div>
    )
  }
}
