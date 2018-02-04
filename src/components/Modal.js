import React from 'react'
import './Modal.css'

const Modal = ({children, onDismiss}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          {onDismiss && (
            <div className="dismiss-modal" onClick={onDismiss}>
              &times;
            </div>
          )}
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
