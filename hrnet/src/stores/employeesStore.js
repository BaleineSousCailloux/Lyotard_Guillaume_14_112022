import { combineReducers, createStore } from 'redux'
import { produce } from 'immer'

/**
 * Initial State
 * @returns state initial or error
 */
const initialState = {
  employeesList: [
    {
      city: 'San Francisco',
      dateBirth: -154310400000,
      department: 'Engineering',
      firstName: 'Bruce',
      lastName: 'Willis',
      dateStart: 489801600000,
      stateName: 'CO',
      street: 'Lombard',
      zipCode: 102302,
    },
    {
      city: 'Miami',
      dateBirth: -91152000000,
      department: 'Human Resources',
      firstName: 'Jason',
      lastName: 'Statham',
      dateStart: 722304000000,
      stateName: 'FL',
      street: 'Ocean Side',
      zipCode: 2310,
    },
    {
      city: 'New York',
      dateBirth: -62726400000,
      department: 'Engineering',
      firstName: 'Tom',
      lastName: 'Cruise',
      dateStart: 581126400000,
      stateName: 'GA',
      street: '5th Avenue',
      zipCode: 53002,
    },
  ],
  error: null,
}

const CREATE_EMPLOYEE = 'employee/create'
const createEmployee = (newEmployee) => ({
  type: CREATE_EMPLOYEE,
  payload: newEmployee,
})

const ERROR = 'error'
const errorDisplay = () => ({ type: ERROR })

/**
 * Action updateEmployeesList
 * @param {object} type newEmployee
 * @returns add employee to the state or display an error
 */
export const updateEmployeesList = (newEmployee) => {
  // console.log(newEmployee)
  try {
    store.dispatch(createEmployee(newEmployee))
  } catch (error) {
    store.dispatch(errorDisplay(error))
  }
}

function employeesReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_EMPLOYEE: {
        draft.employeesList.push(action.payload)
        return
      }
      case ERROR: {
        draft.error = action.payload
        return
      }
      default:
        return
    }
  })
}

const reducer = combineReducers({
  employees: employeesReducer,
})

// redux devtools
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, reduxDevtools)

export default store
