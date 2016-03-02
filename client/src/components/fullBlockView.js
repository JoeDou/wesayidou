import React from 'react'

export default ( { url, text }) => {
  let style = {
    backgroundImage: `url(${url})`
  }
  return (
    <div className="parallex" style={style}>
      <div className="large-font">{text}</div>
    </div>
  )
}
