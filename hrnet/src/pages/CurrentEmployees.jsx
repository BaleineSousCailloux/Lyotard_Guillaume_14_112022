import React from 'react'
import LogoNav from '../components/LogoNav'
import backImage from '../assets/Team2.svg'
import '../styles/CurrentEmployees.css'

function CurrentEmployees() {
  return (
    <main className="bg-list">
      <img className="bg-list-image" src={backImage} alt="working together" />
      <LogoNav />
    </main>
  )
}

export default CurrentEmployees
