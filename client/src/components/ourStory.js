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
          text="Our Story"
          url="/assets/images/DSC_4516.jpg"
        />
        <div className="text-view">
          <p>
            The first step is to confirm what is slowing down compilation. CSS is a common culprit, but not the only one.
            Webpack provides a fantastic profiler. To use it, first run webpack in profiler mode and output the statistics to a file: webpack --progress -c --profile --json > stats.json, then upload it.
            You'll get to see a cool dependency tree, and various benchmarks on how long each modules took to process. If you see a lot of time spent in your CSS or SASS, keep on reading.
          </p>
        </div>
        <FullBlockView
          text="Best Friends"
          url="/assets/images/underConstruction.jpg"
        />
        <ThumbnailGrid />
        <Modal
          show={this.props.gallery.show}
          onHide={this.onHideGallery.bind(this)}
          container={this}
          aria-labelledby="contained-modal-title"
          bsSize="large"
        >
          <Modal.Header closeButton className="modalBackground modalHeader" />
          <Modal.Body className="modalBackground">
            <Gallery />
          </Modal.Body>
        </Modal>
        <FullBlockView
          text="He Proposed"
          url="/assets/images/2596_01.jpg"
        />
        <div className="text-view">
          <p>
            The first step is to confirm what is slowing down compilation. CSS is a common culprit, but not the only one.
            Webpack provides a fantastic profiler. To use it, first run webpack in profiler mode and output the statistics to a file: webpack --progress -c --profile --json > stats.json, then upload it.
            You'll get to see a cool dependency tree, and various benchmarks on how long each modules took to process. If you see a lot of time spent in your CSS or SASS, keep on reading.
          </p>
        </div>
        <FullBlockView
          text="She Said Yes"
          url="/assets/images/DSC_4516.jpg"
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  }
}

export default connect(mapStateToProps, { showGallery })(OurStory)
