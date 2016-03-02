import React, { Component } from 'react'
import { imageLocation } from '../constants/constants'
import { Grid, Thumbnail, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { showGallery } from '../actions/index'

class ThumbnailGrid extends Component {
  onThumbnailClick(index, e){
    e.preventDefault()
    this.props.showGallery(true, index)
  }

  render(){
    const thumbnailList = imageLocation.map( (location, index) => {
      return (
        <Col key={index} xs={6} md={3}>
          <Thumbnail onClick={this.onThumbnailClick.bind(this, index)} alt="180x180" src={location} />
        </Col>
      )
    })

    return (
      <Grid>
        <Row>
          {thumbnailList}
        </Row>
      </Grid>
    )
  }
}

export default connect(null, { showGallery })(ThumbnailGrid)
