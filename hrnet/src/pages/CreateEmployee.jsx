import React from 'react'
import LogoNav from '../components/LogoNav'
import backImage from '../assets/Team1.svg'
import CreateEmployeeForm from '../components/CreateEmployeeForm'
import '../styles/CreateEmployee.css'

/**
 * Page CreateEmployee
 * @returns the home page and createEmployeeForm
 */
function CreateEmployee() {
  return (
    <main className="bg-home">
      <LogoNav />
      <CreateEmployeeForm />
      <img className="bg-home-image" src={backImage} alt="working together" />
    </main>
  )
}

export default CreateEmployee
