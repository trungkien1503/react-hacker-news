import React from 'react'

export default function StoriesList(props) {
  return (
    <div className="row">
      {props.loading ? "...Stories Loading" : props.list}
    </div>
  )
}
