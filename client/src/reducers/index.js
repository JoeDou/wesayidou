import { combineReducers } from 'redux'
import GalleryReducer from './reducer_gallery'
import InviteReducer from './reducer_invite'

const rootReducer = combineReducers({
  gallery: GalleryReducer,
  invite: InviteReducer
})

export default rootReducer
