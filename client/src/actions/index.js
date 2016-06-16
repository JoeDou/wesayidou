import axios from 'axios'

export const SHOW_GALLERY = 'SHOW_GALLERY'
export const FETCH_INVITE = 'FETCH_INVITE'
export const UPDATE_INVITE = 'UPDATE_INVITE'
export const SAVE_INVITE = 'SAVE_INVITE'
export const CLEAR_INVITE = 'CLEAR_INVITE'


export function showGallery(show, index) {
  return {
    type: SHOW_GALLERY,
    payload: {
      show,
      index
    }
  }
}

export function fetchInvite(state) {
  let firstName = state.firstName.toLowerCase()
  let lastName = state.lastName.toLowerCase()
  const request = axios.get(`/invite?id=${state.id}&firstName=${firstName}&lastName=${lastName}`)
  return {
    type: FETCH_INVITE,
    payload: request
  }
}

export function updateInvite(state) {
  return {
    type: UPDATE_INVITE,
    payload: state
  }
}

export function saveInvite(invite) {
  const request = axios.post(`/invite/${invite.uuid}`, invite)
  return {
    type: SAVE_INVITE,
    payload: request
  }
}

export function clearInvite() {
  return {
    type: CLEAR_INVITE
  }
}
