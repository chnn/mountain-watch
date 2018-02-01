export const SET_ADDING_LOCATION = 'SET_ADDING_LOCATION'

export function setAddingLocation(val) {
  return {
    type: SET_ADDING_LOCATION,
    payload: {isAddingNewLocation: val},
  }
}

export const ADD_NEW_LOCATION = 'ADD_NEW_LOCATION'

export function addNewLocation(location) {
  return {
    type: ADD_NEW_LOCATION,
    payload: location,
  }
}
