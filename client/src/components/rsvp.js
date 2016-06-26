import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchInvite, updateInvite, saveInvite, clearInvite } from '../actions/index'
import _ from 'lodash'

class Rsvp extends Component {

  state = {
    id: '',
    firstName: '',
    lastName: '',
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillUnmount() {
    this.props.clearInvite()
  }

  onSubmitId(event) {
    event.preventDefault()
    this.props.fetchInvite(this.state)
  }

  onSubmitInvite(evet) {
    event.preventDefault()
    this.props.invite.payload.responded = true
    this.props.saveInvite(this.props.invite.payload).then(() => {
      this.context.router.push('/thankyou')
    })
  }

  onChange(guest, field, event) {
    debugger
    let updatedInvite = _.clone(this.props.invite)
    if (field === 'accepted'){    
      let updatedGuest = _.find(updatedInvite.payload.invitee, guest)
      updatedGuest.accepted = event.target.checked
    } else {
      updatedInvite.payload[field] = event.target.value
    }
    this.props.updateInvite(updatedInvite)
  }

  onIdChange(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  onReset(){
    this.props.clearInvite()
    this.setState({
      id: '',
      firstName: '',
      lastName: ''
    })
  }

  renderForm() {
    let { invite } = this.props
    if (invite.success){
      let guestInput = _.map(invite.payload.invitee, (guest, index) => {
        let { firstName, lastName } = guest
        firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1)
        lastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1)
        return (
          <tr key={index}>
            <td>
              <label className="invitee-name" htmlFor={guest.firstName}>{firstName} {lastName}</label>
            </td>
            <td>
              <div className="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  className="onoffswitch-checkbox"
                  id={guest.firstName}
                  checked={guest.accepted}
                  onChange={this.onChange.bind(this, guest, 'accepted')}
                />
                <label className="onoffswitch-label" htmlFor={guest.firstName}>
                  <span className="onoffswitch-inner"></span>
                  <span className="onoffswitch-switch"></span>
                </label>
              </div>
            </td>
            <td className="tableWidth">
              {guest.accepted ? "I'm coming to party" : "Have fun without me"}
            </td>
          </tr>
        )
      })

      return (
        <div>
          <div className="rsvp-text">We have reserved the following spots for your invitation:</div>
          <table className="table">
            <tbody>
              { guestInput }
            </tbody>
          </table>
          <div className="form-group">
            <label>Dietary Restrictions</label>
            <textarea
              className="form-control"
              onChange={this.onChange.bind(this, undefined, 'restrictions')}
              value={ invite.payload.restrictions}
            />
          </div>
          <div className="form-group">
            <label>Other Comments</label>
            <textarea
              className="form-control"
              onChange={this.onChange.bind(this, undefined, 'comments')}
              value={this.state.comments || invite.payload.comments}
            />
          </div>
          <button className="btn btn-findRsvp" type="button" onClick={this.onSubmitInvite.bind(this)}>Confirm</button>
        </div>
      )
    } else {
      return (
        <div className="retry">
          <div className="retry-msg">Oops we can't find your invitation. Please try again or email <a href="mailto:joe.dou@gmail.com?Subject=Wedding%20RSVP" target="_top">Joe</a> for support</div>
          <button className="btn btn-findRsvp" type="button" onClick={this.onReset.bind(this)}>Try Again</button>
        </div>
      )
    }
  }

  render() {
    return !this.props.invite ? (
      <div className="rsvpForm">
        <div className="form-group">
          <label>RSVP Number</label>
          <input type="text" className="form-control" onChange={this.onIdChange.bind(this, 'id')} value={this.state.id} />
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" onChange={this.onIdChange.bind(this, 'firstName')} value={this.state.firstName} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" onChange={this.onIdChange.bind(this, 'lastName')} value={this.state.lastName}/>
        </div>

        <button className="btn btn-findRsvp" type="button" onClick={this.onSubmitId.bind(this)}>Find RSVP</button>
      </div>
    ) : (
      <div className="inviteForm">
        {this.renderForm()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    invite: state.invite
  }
}

export default connect(mapStateToProps, { fetchInvite, updateInvite, saveInvite, clearInvite })(Rsvp)