import { SHOW_GALLERY } from '../actions/index'

const INITIAL_STATE = { showGallery: { show: false } }

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case SHOW_GALLERY:
      return { 
        showGallery: action.payload
      }
    default:
      return state
  }
}
