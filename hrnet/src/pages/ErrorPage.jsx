import React from 'react'
import logo from '../assets/Logo1.svg'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <main className="main-nav">
      <h2 className="error-page-title">This page does not exist</h2>
      <p>To return home page, please clik on the Logo</p>
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="HRnet logo" />
        <h1 className="sr-only">HRnet</h1>
      </NavLink>
    </main>
  )
}

export default ErrorPage
