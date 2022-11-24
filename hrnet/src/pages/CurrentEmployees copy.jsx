import React from 'react'
import LogoNav from '../components/LogoNav'
import backImage from '../assets/Team2.svg'
import '../styles/CurrentEmployees.css'
import { useStore } from 'react-redux'
import { Table } from 'sematable'

function CurrentEmployees() {
  const store = useStore()
  console.log(store.getState())
  const columns = [
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
    { key: 'lastName', header: 'Last Name', sortable: true, searchable: true },
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
    {
      key: 'firstName',
      header: 'First Name',
      sortable: true,
      searchable: true,
    },
  ]

  //     city: 'San Francisco',
  //     birthDate: '10/02/1965',
  //     department: 'Engineering',
  //     firstName: 'Bruce',
  //     lastName: 'Willis',
  //     startDate: '10/02/1965',
  //     stateName: 'CO',
  //     street: 'Lombard',
  //     zipCode: '102302',
  return (
    <main className="bg-list">
      <img className="bg-list-image" src={backImage} alt="working together" />
      <LogoNav />
      <Table
        data={store.getState().employees.employeesList}
        columns={columns}
      />
    </main>
  )
}

export default CurrentEmployees
