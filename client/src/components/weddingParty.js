import React from 'react'
import { Component } from 'react'

import { Image } from 'react-bootstrap'
import { guys, gals } from '../constants/constants'

const ProfileCard = ({ name, title, paragraph, url }) => (
  <div className="profile-card clearfix">
    <div className="profile-header">
      <Image className="profile-avatar" src={url} rounded />
      <div className="profile-body">
        <h2>{name}</h2>
        <h4>{title}</h4>
        <p className="test">{paragraph}</p>
      </div>
    </div>
  </div>
)

const weddingPartyGuys = () => {
  return guys.map(person => {
    let { name, title, paragraph, url } = person
    return <ProfileCard key={name} name={name} title={title} paragraph={paragraph} url={url}/>
  })
}

const weddingPartyGals = () => {
  return gals.map(person => {
    let { name, title, paragraph, url } = person
    return <ProfileCard key={name} name={name} title={title} paragraph={paragraph} url={url}/>
  })
}

export default class extends Component {

  render() {
    return (
      <div>
        <div className="large-font black center party-heading">Ladies</div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className= "profile-full" src="/assets/images/wedding-party/Lisa.jpg" />
            <div className="profile-full-text">
              <h1>Lisa Uy</h1>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            { weddingPartyGals() }
          </div>
        </div>
        <div className="large-font black party-heading">Gentlemen</div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className= "profile-full" src="/assets/images/wedding-party/Joe.jpg" />
            <div className="profile-full-text">
              <h1> Joe Dou</h1>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            { weddingPartyGuys() }
          </div>
        </div>
      </div>
    )
  }
}
