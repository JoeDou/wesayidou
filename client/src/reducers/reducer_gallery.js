import { SHOW_GALLERY } from '../actions/index'

const INITIAL_STATE = { gallery: { show: false } }

export default function(state=INITIAL_STATE, action){
  console.log('in reducer')
  switch (action.type) {
    case SHOW_GALLERY:
      return { 
        gallery: action.payload
      }
    default:
      return state
  }
}
