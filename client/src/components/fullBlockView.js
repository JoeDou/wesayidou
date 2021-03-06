import React from 'react'
import classnames from 'classnames'

export default ( { url, text, position, dark }) => {
  let style = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover'
  }
  if (position) {
    style.backgroundPosition= position
  }
  let textClass = classnames('large-font', {
    'black': Boolean(dark),
  })
  return (
    <div className="parallex fixed-img" style={style}>
      <div className={textClass}>{text}</div>
    </div>
  )
}
