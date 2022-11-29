import React from 'react'
import '../styles/Modal.css'
import { useState, useEffect } from 'react'

const Modal = ({ message, isShowing }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(isShowing)
  }, [isShowing])

  return (
    <div>
      {isVisible ? (
        <div className="modal-window">
          <div className="modal-container">
            <button
              className="modal-button"
              onClick={() => {
                setIsVisible(false)
              }}
            >
              X
            </button>
            <p className="modal-message">{message}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Modal
