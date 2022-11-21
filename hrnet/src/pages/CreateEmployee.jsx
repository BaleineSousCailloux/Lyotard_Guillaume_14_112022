import React from 'react'
import LogoNav from '../components/LogoNav'
import backImage from '../assets/Team1.svg'
import '../styles/CreateEmployee.css'

function CreateEmployee() {
  return (
    <main className="bg-home">
      <img className="bg-home-image" src={backImage} alt="working together" />
      <LogoNav />
    </main>
  )
}

export default CreateEmployee
