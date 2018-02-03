import {fetchLocations} from './api'

export const SET_ADDING_LOCATION = 'SET_ADDING_LOCATION'
export const ADD_NEW_LOCATIONS = 'ADD_NEW_LOCATIONS'
export const SET_LOCATIONS_ERROR = 'SET_LOCATIONS_ERROR'
export const SET_LOCATIONS_STATUS = 'SET_LOCATIONS_STATUS'

export const setAddingLocation = veracity => {
  return {
    type: SET_ADDING_LOCATION,
    payload: veracity,
  }
}

export const addNewLocations = locations => {
  return {
    type: ADD_NEW_LOCATIONS,
    payload: locations,
  }
}

export const setLocationsError = error => {
  return {
    type: SET_LOCATIONS_ERROR,
    payload: error,
  }
}

export const setLocationsStatus = status => {
  return {
    type: SET_LOCATIONS_STATUS,
    payload: status,
  }
}

export const loadLocations = () => {
  return async (dispatch, getState) => {
    const {locations} = getState()

    if (locations.length > 0) {
      // Assume we only need to load locations once
      return
    }

    dispatch(setLocationsStatus('loading'))

    try {
      const newLocations = await fetchLocations()

      dispatch(addNewLocations(newLocations))
      dispatch(setLocationsStatus('done'))
    } catch (e) {
      dispatch(setLocationsError(e))
    }
  }
}
