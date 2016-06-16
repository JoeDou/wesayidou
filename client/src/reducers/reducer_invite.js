import { FETCH_INVITE, UPDATE_INVITE, SAVE_INVITE, CLEAR_INVITE } from '../actions/index'

const INITIAL_STATE = null

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_INVITE:
      return action.payload.data
    case UPDATE_INVITE:
      return action.payload
    case CLEAR_INVITE:
      return null
    default:
      return state
  }
}