import React from 'react'
import { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar fluid={true} className="navbar-cust">
          <Navbar.Header>
            <Navbar.Brand className="nav-title">
              JOE & LISA
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav-cust">
              <NavItem href="#">Our Story</NavItem>
              <NavItem href="#">When & Where</NavItem>
              <NavItem href="#">RSVP</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        { this.props.children }
      </div>
    )
  }
}
