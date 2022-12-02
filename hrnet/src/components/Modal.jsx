import React from 'react'
import '../styles/Modal.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Component Modal not use because publish in npm for use as module
 * @param {string} type message
 * @param {bool} type boolean
 * @param {func} type close modal function
 * @returns modale of employee creation confirmation
 */
const Modal = ({ message, isShowing, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(isShowing)
  }, [isShowing])

  return (
    <div>
      {isVisible ? (
        <div className="modal-window">
          <div className="modal-container">
            <button className="modal-button" onClick={onClose}>
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

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  isShowing: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
