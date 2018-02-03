import {combineReducers} from 'redux'
import {
  SET_ADDING_LOCATION,
  ADD_NEW_LOCATIONS,
  SET_LOCATIONS_ERROR,
  SET_LOCATIONS_STATUS,
} from './actions'

export const makeInitialRemoteDataState = dataDefault => {
  return {
    status: 'notStarted', // 'notStarted', 'loading', 'done', 'failed'
    error: null,
    data: dataDefault,
  }
}

export const isAddingNewLocation = (state = false, {type, payload}) => {
  switch (type) {
    case SET_ADDING_LOCATION:
      return payload
    default:
      return state
  }
}

export const locations = (
  state = makeInitialRemoteDataState([]),
  {type, payload}
) => {
  switch (type) {
    case ADD_NEW_LOCATIONS:
      return {
        ...state,
        data: [...state.data, ...payload],
      }
    case SET_LOCATIONS_STATUS:
      return {
        ...state,
        status: payload,
      }
    case SET_LOCATIONS_ERROR:
      return {
        ...state,
        status: 'failed',
        error: payload,
      }
    default:
      return state
  }
}

export const app = combineReducers({
  locations,
  isAddingNewLocation,
})
