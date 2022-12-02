import React from 'react'
import { useState } from 'react'
import states from '../datas/states'
import departments from '../datas/departments'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import '../styles/DatePicker.css'
import '../styles/Calendar.css'
import Dropdown from 'react-dropdown'
import '../styles/Dropdown.css'
import { updateEmployeesList } from '../stores/employeesStore'
import Modal from 'modal-pkg'

/**
 * Component CreateEmployeeForm
 * @returns the form to create a new employee
 */
function CreateEmployeeForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [stateName, setStateName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')
  const [modalIsShowing, setModalIsShowing] = useState(false)

  const [errorMessage, setErrorMessage] = useState('sr-only')
  const closeModal = () => {
    setModalIsShowing(false)
  }
  const submitForm = () => {
    if (
      firstName &&
      lastName &&
      street &&
      stateName &&
      city &&
      zipCode &&
      department &&
      startDate &&
      birthDate
    ) {
      setErrorMessage('sr-only')

      const dateStart = startDate?.getTime()
      const dateBirth = birthDate?.getTime()

      const newEmployee = {
        firstName,
        lastName,
        dateBirth,
        dateStart,
        street,
        stateName,
        city,
        zipCode,
        department,
      }
      updateEmployeesList(newEmployee)
      setModalIsShowing(true)
      setFirstName('')
      setLastName('')
      setBirthDate('')
      setStreet('')
      setCity('')
      setStateName('')
      setZipCode('')
      setDepartment('')
    } else {
      setErrorMessage('error-message')
    }
  }

  return (
    <div className="form">
      <div className="form-private">
        <div className="form-private-identity">
          <div className="input-wrapper">
            <label htmlFor="firtName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="birthDate">Date of Birth</label>
            <DatePicker
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e)}
            />
          </div>
        </div>
        <div className="form-private-adress">
          <div className="input-wrapper">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="stateName">State</label>
            <Dropdown
              options={states.map((e) => ({
                label: e.name,
                value: e.abbreviation,
              }))}
              placeholder="Select a State"
              type="text"
              id="stateName"
              value={stateName}
              onChange={(e) => setStateName(e.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="number"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-save">
        <div className="input-wrapper dept-dropdown">
          <label className="sr-only" htmlFor="department">
            Department
          </label>
          <Dropdown
            options={departments}
            placeholder="Select a Department"
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.value)}
          />
        </div>
        <button className="validate" title="save" onClick={submitForm}>
          SAVE
        </button>
        <Modal
          message="Employee Created !"
          onClose={closeModal}
          isShowing={modalIsShowing}
        />
        <p className={errorMessage}>Please complete all fields</p>
      </div>
    </div>
  )
}

export default CreateEmployeeForm
