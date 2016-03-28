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
              <NavItem href="/test" active={location.pathname === '/test'}>Our Story</NavItem>
              <NavItem href="/test/wedding-day" active={location.pathname === '/test/wedding-day'}>Wedding Day</NavItem>
              <NavItem href="/test/wedding-party" active={location.pathname === '/test/wedding-party'}>Wedding Party</NavItem>
              <NavItem href="/test/lodging" active={location.pathname === '/test/lodging'}>Lodging</NavItem>
              <NavItem href="/test/rsvp" active={location.pathname === '/test/rsvp'}>RSVP</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        { children }
      </div>
    )
  }
}
