import React from 'react'
import { Component } from 'react'

import FullBlockView from './fullBlockView'

export default class extends Component {

  render() {
    return (
      <div>
        <div className="text-header">
          <div>Since the wedding is during Labor Day Weekend, most of the hotels in the Mill Valley/North Bay area have a 2 or 3 day minimum 
          stay. We reserved hotel room blocks in the following hotels that did not require a 2 or 3 night minimum stay in the North Bay and 
          downtown San Francisco area. If you would like to stay Friday night as well, most of them will give you the same rate as Saturday if 
          available. We also recommend looking into other hotels that we did not book a hotel block with--you might be able to find a better deal 
          in the area that you prefer!</div>
        </div>
        <FullBlockView
          text="North Bay"
          url="/assets/images/Lodging-h1.jpg"
          position="70% 30%"
          dark={true}
        />
        <div className="text-view center-text">
          <h2>Extended Stay America</h2>
          <h3>1775 Francisco Blvd.</h3>
          <h3>San Rafael, CA 94901</h3>
          <p><a href="http://www.extendedstayamerica.com/hotels/ca/oakland/francisco-blvd-east" target="_blank">http://www.extendedstayamerica.com/hotels/ca/oakland/francisco-blvd-east</a></p>
          <br/>
          <h3>To reserve:</h3>
          <p>Call 415-451-1887 to reserve your room, hotel block under “Lisa and Joe Wedding”</p>
          <br/>
          <h3>Cost:</h3>
          <p>$159/night for a single king - 1 adult per room</p>
          <p>$169/night for a deluxe king - 2 adults per room</p>
          <p>$5 additional per additional adult per room</p>
          <p>Note: Tax and Fees not included</p>
          <p>Group rate valid until 8/4/2016 only or on a room and rate availability basis</p>
          <br/>
          <h3>Proximity:</h3>
          <p>From this hotel to the ceremony: 15.1 miles south, average 21 minute drive</p>
          <p>From the reception to this hotel: 6.8 miles north, average 12 minute drive</p>
        </div>
        <FullBlockView
          text="Downtown"
          url="/assets/images/Lodging-h2.jpg"
          dark={true}
        />
        <div className="text-view center-text">
          <h2>Hotel Nikko</h2>
          <h3>222 Mason Street</h3>
          <h3>San Francisco, CA 94102</h3>
          <p><a href="http://www.hotelnikkosf.com/" target="_blank">http://www.hotelnikkosf.com/</a></p>
          <br/>
          <h3>To reserve:</h3>
          <p>Go online: <a href="https://aws.passkey.com/g/58087516" target="_blank">Click Here</a></p>
          <p>Call (415) 394-1111 or toll-free at 1(800) 248-3308; group name is “Uy Dou Wedding Group”</p>
          <br/>
          <h3>Cost:</h3>
          <p>$239/night + taxes and fees for a deluxe king room</p>
          <p>$269/night + taxes and fees for a deluxe double bedded room</p>
          <p>Note: Tax and Fees not included</p>
          <p>Group rate valid until 8/2/2016 or on a room and rate availability basis</p>
          <br/>
          <h3>Other info:</h3>
          <p>Use of health club is additional $25/room/stay</p>
          <p>Early departure fee of 1 night’s room and tax will be charged if a guest checks out prior to your reserved checkout date; late 
          departure charge also applies</p>
          <br/>
          <h3>Proximity:</h3>
          <p>From this hotel to the ceremony: 3.9 miles or average 15 min drive</p>
          <p>From the reception to this hotel: 13.2 miles south or average 27 min drive</p>
          <br/><br/>
          <h2>Courtyard by Marriott San Francisco Union Square</h2>
          <h3>761 Post Street</h3>
          <h3>San Francisco, CA 94109</h3>
          <p><a href="http://www.hotelnikkosf.com/" target="_blank">http://www.hotelnikkosf.com/</a></p>
          <br/>
          <h3>To reserve:</h3>
          <p>Go online: 
            <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Uy%20Dou%20Wedding%5Esfocn%60udwudwa%7Cudwudwb%60179%60USD%60false%604%609/3/16%609/4/16%608/3/16&app=resvlink&stop_mobi=yes"
              target="_blank">Click Here</a>
          </p>
          <p>Call Marriott Reservations at 1(888) 236-2427, group name “Uy Dou Wedding Group”</p>
          <br/>
          <h3>Cost:</h3>
          <p>$179/night + taxes and fees for a single bedded or a double bedded room</p>
          <p>Note: Tax and Fees not included</p>
          <p>Group rate valid until 8/1/2016 or on a room and rate availability basis</p>
          <br/>
          <h3>Other info:</h3>
          <p>Please note that this hotel is not right at Union Square but a 0.4 mile/9 min walk; it is at the edge of the Tenderloin district but 
          seems ok (we personally checked out the area)</p>
          <br/>
          <h3>Proximity:</h3>
          <p>From this hotel to the ceremony: 3.7 miles or an average 15 minute drive</p>
          <p>From the reception to this hotel: 12.8 miles south or an average 24 minute drive</p>
        </div>
      </div>
    )
  }
}
