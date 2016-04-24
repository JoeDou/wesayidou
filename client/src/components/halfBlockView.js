
import React from 'react'
import classnames from 'classnames'

export default ( { url, text, position, dark }) => {
  let style = {
    backgroundImage: `url(${url})`,
  }
  if (position) {
    style.backgroundPosition= position
  }
  let textClass = classnames('large-font col-md-6 col-sm-6', {
    'black': Boolean(dark),
  })
  return (
    <div className="parallex" style={style}>
      <div className="row">
        <div className={textClass}></div>
        <div className="col-md-6 col-sm-6 halfBlockText">test</div>
      </div>
    </div>
  )
}
