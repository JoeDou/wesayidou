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
          <h2>Her version</h2>
          <p> It was September 2008. I just started nursing school in Philadelphia three months prior. I planned to go to a graduate school 
          meet and greet, but decided not to last minute (it rained and that was my excuse). A friend ended up calling me and convinced me to 
          go (I was a graduate student so I was easily convinced at the offer of two free drink tickets and free food). So I went, had a good 
          time, ended up NOT leaving early like I said I would. At the end of the night (two free drink tickets later), the bouncer was ushering 
          everyone out--and there was Joe standing next to him. As I passed him on my way out, I said, “Hi, you look familiar! Are you from 
          California?”</p>
          <p>...he was not, but now he is!</p>
          <br/>
          <h2>His version</h2>
          <p>TO DO</p>
        </div>
        <FullBlockView
          text="He Proposed"
          url="/assets/images/OurStory-h2.jpg"
          position="35% 30%"
        />
        <div className="text-view">
          <h4>June 19, 2016</h4>
          <h2>The Proposal</h2>
          <p>Joe proposed after work on a Friday. Lisa was not expecting it to happen that day at all. Her sisters had stayed over the night before 
          and were staying over again. Lisa called Joe around five and asked him what they were all doing for dinner.</p>
          <br/>
          <p><strong>Joe:</strong> “I think your sister ordered some Japanese food.”</p>
          <p><strong>Lisa:</strong> “From where?”</p>
          <p><strong>Joe:</strong> “I don’t know, she ordered some sushi rolls.”</p>
          <br/>
          <p>Lisa thought it was weird because Joe was being vague and her sister, Anne, usually is not the type to order without asking her. Lisa wondered 
          why her sister didn’t what Lisa wanted!</p>
          <br/>
          <p>Lisa ended up leaving work earlier than she expected. On her way home, she called Joe and asked him if he wanted to accompany her to Costco to 
          get gas. He said he didn’t and she should go ahead and get gas. Lisa ended up not hitting any traffic which was unusual but she was so hungry 
          and wanted to eat the sushi rolls so she decided not to get gas and head straight for home.</p>
          <br/>
          <p>When Lisa opened the front door, she saw petals strewn over the walkway and balloons all over the living room. Lisa was momentarily confused 
          and thought “surprise birthday party?!”..only it wasn’t her birthday. Joe popped out from the corner and got on his knees. Lisa's sisters were 
          giggling in a corner. Althought, it was all a blur, the proposal was captured on video, and Lisa said yes!</p>
          <br/>
          <p><strong>Lisa:</strong> "There were no sushi rolls waiting for me at home, but a perfect diamond ring sufficed...and we ended up all going out 
          for sushi with my sisters and our good friends Sharon and Alex, Joe’s engagement advisors!"</p>
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
