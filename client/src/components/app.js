import React, { PropTypes } from 'react'
import { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'

export default class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  onClickLink(link) {
    this.context.router.push(link)
  }

  render() {
    let { location, children } = this.props

    return (
      <div className="main-app">
        <Navbar fluid={true} className="navbar-cust">
          <Navbar.Header>
            <Navbar.Brand className="nav-title">
              J O E  +  L I S A
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav-cust">
              <NavItem onClick={this.onClickLink.bind(this, '/')} active={location.pathname === '/'}>Home</NavItem>
              <NavItem onClick={this.onClickLink.bind(this, '/our-story')} active={location.pathname === '/our-story'}>Our Story</NavItem>
              <NavItem onClick={this.onClickLink.bind(this, '/wedding-party')} active={location.pathname === '/wedding-party'}>Wedding Party</NavItem>
              <NavItem onClick={this.onClickLink.bind(this, '/lodging')} active={location.pathname === '/lodging'}>Lodging</NavItem>
              <NavItem onClick={this.onClickLink.bind(this, '/registry')} active={location.pathname === '/registry'}>Registry</NavItem>
              <NavItem onClick={this.onClickLink.bind(this, '/rsvp')} active={location.pathname === '/rsvp'}>RSVP</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="main-body">
          { children }
        </div>
      </div>
    )
  }
}
