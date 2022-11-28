import React from 'react'
import { useState, useEffect } from 'react'

const Modal = ({ message, isShowing }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(isShowing)
  }, [isShowing])

  const modalwindowStyle = {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    zIndex: '1',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.75)',
    textAlign: 'center',
  }

  const modalcontainerStyle = {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 'fit-content',
    padding: '0 1rem',
    gap: '1rem',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '5px',
    border: 'solid grey 2px',
  }

  return (
    <div>
      {isVisible ? (
        <div style={modalwindowStyle}>
          <div style={modalcontainerStyle}>
            <button
              onClick={() => {
                setIsVisible(false)
              }}
            >
              X
            </button>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Modal
