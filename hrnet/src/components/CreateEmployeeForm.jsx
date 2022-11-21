import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import states from '../datas/states'
import departments from '../datas/departments'
// import { useStore } from 'react-redux'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import '../styles/DatePicker.css'
import '../styles/Calendar.css'
import Dropdown from 'react-dropdown'
import '../styles/Dropdown.css'
// import { loginUser } from '../stores/employeesStore'

function SignInForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [stateName, setStateName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')

  // const store = useStore()
  const navigate = useNavigate()

  const submitForm = async () => {
    // await loginUser(store, firstName, lastName)
    navigate('/profile')
  }

  return (
    <div className="form">
      <div className="form-identity">
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
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="startDate">Start Date</label>
          <DatePicker
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>
      <div className="form-adress">
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
            onChange={(e) => setStateName(e.target.value)}
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
      <div className="form-save">
        <div className="input-wrapper">
          <label htmlFor="department">Department</label>
          <Dropdown
            options={departments}
            placeholder="Select a Department"
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <button title="save" action={submitForm}>
          Save
        </button>
      </div>
    </div>
  )
}

export default SignInForm
