import React from 'react'
import { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class App extends Component {
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
              <NavItem href="/" active={location.pathname === '/'}>Home</NavItem>
              <NavItem href="/our-story" active={location.pathname === '/our-story'}>Our Story</NavItem>
              <NavItem href="/wedding-party" active={location.pathname === '/wedding-party'}>Wedding Party</NavItem>
              <NavItem href="/lodging" active={location.pathname === '/lodging'}>Lodging</NavItem>
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
