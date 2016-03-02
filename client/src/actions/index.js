export const SHOW_GALLERY = 'SHOW_GALLERY'

export function showGallery(show, index) {
  console.log('in action')
  return {
    type: SHOW_GALLERY,
    payload: {
      show,
      index
    }
  }
}
