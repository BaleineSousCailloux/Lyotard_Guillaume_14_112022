import React from 'react'
import LogoNav from '../components/LogoNav'
import backImage from '../assets/Team2.svg'
import '../styles/CurrentEmployees.css'
import EmployeesTable from '../components/EmployeesTable'

function CurrentEmployees() {
  return (
    <main className="bg-list">
      <img className="bg-list-image" src={backImage} alt="working together" />
      <LogoNav />
      <EmployeesTable />
    </main>
  )
}

export default CurrentEmployees
