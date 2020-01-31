import React from 'react'

export default function StoriesList(props) {
  return (
    <div>
      <ol>
        {props.loading ? "...Stories Loading" : props.list}
      </ol>
    </div>
  )
}
