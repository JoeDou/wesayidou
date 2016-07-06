import React from 'react'
import { Component } from 'react'

import FullBlockView from './fullBlockView'

export default class extends Component {

  render() {
    return (
      <div>
        <FullBlockView
          text="Registry"
          url="/assets/images/Registry-h1.jpg"
          position="70% 30%"
          dark={true}
        />
        <div className="text-header">
          <p>Dear Guests,</p>
          <br/>
          <p>While gifts are appreciated, please know that your well wishes and presence is a present enough. Should you wish to contribute in some other way, a little extra money to help us begin our life together as husband and wife would be greatly appreciated.
          </p>
          <br/>
          <p>Love,</p>
          <p>Joe and Lisa</p>
        </div>
      </div>
    )
  }
}
