import { combineReducers, createStore } from 'redux'
import { produce } from 'immer'

// state
const initialState = {
  employeesList: [
    {
      city: 'San Francisco',
      dateBirth: '10/02/1965',
      department: 'Engineering',
      firstName: 'Bruce',
      lastName: 'Willis',
      dateStart: '02/10/1965',
      stateName: 'CO',
      street: 'Lombard',
      zipCode: '102302',
    },
    {
      city: 'Miami',
      dateBirth: '21/11/1972',
      department: 'Human Resources',
      firstName: 'Jason',
      lastName: 'Statham',
      dateStart: '11/21/1972',
      stateName: 'FL',
      street: 'Ocean Side',
      zipCode: '2310',
    },
    {
      city: 'New York',
      dateBirth: '06/01/1968',
      department: 'Engineering',
      firstName: 'Tom',
      lastName: 'Cruise',
      dateStart: '01/06/1968',
      stateName: 'GA',
      street: '5th Avenue',
      zipCode: '53002',
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

// actions
export const updateEmployeesList = (newEmployee) => {
  console.log(newEmployee)
  try {
    store.dispatch(createEmployee(newEmployee))
  } catch (error) {
    store.dispatch(errorDisplay(error))
  }
}

// reducers
function employeesReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_EMPLOYEE: {
        console.log(draft.employeesList)
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

// on utilise combineReducer pour faire
// fonctionner plusieurs reducers ensemble comme l'ajout des transactions
const reducer = combineReducers({
  employees: employeesReducer,
})

// redux devtools
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le reducer créer avec combineReducers
// pour initialiser le store
// Pas besoin de passer de state initial
// car chaque reducer à son propre state initial
const store = createStore(reducer, reduxDevtools)

export default store
