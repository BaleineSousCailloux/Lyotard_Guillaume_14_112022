import React from 'react'
import logo from '../assets/Logo1.svg'
import logoW from '../assets/Logo2.svg'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

/**
 * Component LogoNav
 * @returns Logo (link to home) and dynamic link for navigation between the two pages
 */
const LogoNav = () => {
  const currentPage = useLocation().pathname

  return (
    <div className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        {currentPage === '/' ? (
          <img className="main-nav-logo-image" src={logo} alt="HRnet logo" />
        ) : (
          <img className="main-nav-logo-image" src={logoW} alt="HRnet logo" />
        )}
        <h1 className="sr-only">HRnet</h1>
      </NavLink>
      <div className="main-nav-menu">
        {currentPage === '/' ? (
          <Link className="text-home" to={'/current-employees'}>
            View Current Employees
          </Link>
        ) : (
          <Link className="text-list" to={'/'}>
            Create New Employee
          </Link>
        )}
      </div>
    </div>
  )
}

export default LogoNav
