/**
 * @file is the router of the App
 */

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import CreateEmployee from '../pages/CreateEmployee'
import CurrentEmployees from '../pages/CurrentEmployees'
import ErrorPage from '../pages/ErrorPage'
import { Provider } from 'react-redux'
import store from '../stores/employeesStore.js'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/current-employees" element={<CurrentEmployees />} />
          <Route path="/not-found" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
