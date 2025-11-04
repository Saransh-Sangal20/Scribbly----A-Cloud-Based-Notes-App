import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div>
     <div className={`alert alert-${props.alert.type} d-flex align-items-center justify-content-center`} role="alert">
        <div>
          <strong>{props.alert.msg}</strong>
        </div>
      </div>
    </div>
  )
}