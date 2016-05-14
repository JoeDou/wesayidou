import React from 'react'
import { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'

import { showGallery } from '../actions/index'

import FullBlockView from './fullBlockView'
import ThumbnailGrid from './thumbnailGrid'
import Gallery from './gallery'

class OurStory extends Component {
  onHideGallery(e){
    e.preventDefault()
    this.props.showGallery(false)
  }

  render() {
    return (
      <div>
        <FullBlockView
          text="How We Met"
          url="/assets/images/OurStory-h1.jpg"
        />
        <div className="text-view">
          <h4>September 26, 2008</h4>
          <br/>
          <h2>Her version</h2>
          <p> It was September 2008. I just started nursing school in Philadelphia three months prior. I planned to go to a graduate school meet and greet, but decided not to last minute (it rained and that was my excuse). A friend ended up calling me and convinced me to go. So I went, had a good time, ended up NOT leaving early like I said I would. At the end of the night, as we were being ushered out--I noticed Joe standing next to the door. As I passed him on my way out, I said, “Hi, you look familiar! Are you from California?”</p>
          <p>...he was not, but now he (sort of) is!</p>
          <br/>
          <h2>His version</h2>
          <p>It was difficult to meet new people as a part-time graduate student with a full time job.  The yearly UPenn graduate student event at Moshulu restaurant became the go-to event for my friends and I to meet fellow grad students and to interact with them.  But most importantly the event offered awesome hors d'oeuvres and two free drinks! On the cool night of September 2008, as the third annual party was about to wind down, I was waiting by the exit for my buddy Ray and the rest of the crew as we take the party to the next spot, a girl caught my eye as she was walking towards me for the exit.  I decided that I had nothing to lose, so I went with my “hail mary”.   As she walked up, I asked her “Hey you look familiar, do I know you from somewhere?” Clearly tipsy, she responded, “You look familiar too, are you from California?” At this point, I knew I got this, just as long as I don’t do something stupid like spiking the ball before crossing the goal line  (I'm looking at you, DeSean Jackson). </p>
        </div>
        <FullBlockView
          text="He Proposed"
          url="/assets/images/OurStory-h2.jpg"
          position="35% 30%"
        />
        <div className="text-view">
          <h4>June 19, 2016</h4>
          <h2>The Proposal</h2>
          <br/>
          <p>Joe proposed after work on a Friday. Lisa was not expecting it to happen that day at all. Her sisters, Anne and Letty, had 
          stayed over the night before and were staying over again. Lisa called Joe around five in the afternoon and asked him what they 
          were all doing for dinner. Joe responded vaguely about Anne ordering food. Lisa thought it was weird because Joe was being 
          vague and her sister, Anne, is usually not the type to order without asking her.</p>
          <br/>
          <p>She ended up leaving work earlier than she expected. On her way home, she called Joe and asked him if he wanted to 
          accompany her to Costco to get gas. He said he didn’t and she should go ahead and get gas (since he was still trying to 
          finish decorating for the proposal). She ended up not hitting any traffic which was unusual but she was so hungry and wanted 
          to eat the sushi rolls so she decided not to get gas and head straight for home (where Joe and Lisa’s sisters were frantically 
          lighting all the candles they placed on the floor!).</p>
          <br/>
          <p>When she opened the front door, she saw petals strewn all over the hallway, balloons in the living room and candles on the 
          floor that spelled out “Marry Me”.   Joe popped out from the corner and got on his knees. Her sisters were giggling in a corner. 
          After Joe’s speech, Lisa said yes!</p>
          <br/>
          <p>There were no sushi rolls waiting for her at home, but she thought a perfect diamond ring sufficed. And, all of them, 
          including friends Sharon and Alex, ended up eating sushi for dinner later that night, fulfilling Lisa’s sushi craving after all.</p>
        </div>
        <FullBlockView
          text="She Said Yes"
          url="/assets/images/OurStory-h3.jpg"
        />
        <ThumbnailGrid />
        <Modal
          show={this.props.gallery.show}
          onHide={this.onHideGallery.bind(this)}
          container={this}
          aria-labelledby="contained-modal-title"
          bsSize="large"
          className="modal"
        >
          <Modal.Header closeButton className="modalBackground modalHeader" />
          <Modal.Body className="modalBackground">
            <Gallery />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery.showGallery
  }
}

export default connect(mapStateToProps, { showGallery })(OurStory)
