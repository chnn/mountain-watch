export const SET_ADDING_LOCATION = 'SET_ADDING_LOCATION'
export const ADD_NEW_LOCATIONS = 'ADD_NEW_LOCATIONS'
export const SET_LOCATIONS_ERROR = 'SET_LOCATIONS_ERROR'
export const SET_LOCATIONS_STATUS = 'SET_LOCATIONS_STATUS'
export const SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION'
export const SET_SELECTED_LOCATION_IMAGES = 'SET_SELECTED_LOCATION_IMAGES'
export const SET_SELECTED_LOCATION_IMAGES_STATUS =
  'SET_SELECTED_LOCATION_IMAGES_STATUS'
export const SET_SELECTED_LOCATION_IMAGES_ERROR =
  'SET_SELECTED_LOCATION_IMAGES_ERROR'

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
  return async (dispatch, getState, api) => {
    const {locations} = getState()

    if (locations.length > 0) {
      // Assume we only need to load locations once
      return
    }

    dispatch(setLocationsStatus('loading'))

    try {
      const newLocations = await api.fetchLocations()

      dispatch(addNewLocations(newLocations))
      dispatch(setLocationsStatus('done'))
    } catch (e) {
      dispatch(setLocationsError(e))
    }
  }
}

export const setSelectedLocation = id => {
  return {
    type: SET_SELECTED_LOCATION,
    payload: id,
  }
}

export const setSelectedLocationImages = images => {
  return {
    type: SET_SELECTED_LOCATION_IMAGES,
    payload: images,
  }
}

export const setSelectedLocationImagesStatus = status => {
  return {
    type: SET_SELECTED_LOCATION_IMAGES_STATUS,
    payload: status,
  }
}

export const setSelectedLocationImagesError = error => {
  return {
    type: SET_SELECTED_LOCATION_IMAGES_ERROR,
    payload: error,
  }
}

export const selectLocation = location => {
  return async (dispatch, getState, api) => {
    dispatch(setSelectedLocationImagesStatus('loading'))

    try {
      const images = await api.fetchImagesForLocation(location.id)

      dispatch(setSelectedLocation(location.id))
      dispatch(setSelectedLocationImages(images))
      dispatch(setSelectedLocationImagesStatus('done'))
    } catch (e) {
      dispatch(setSelectedLocationImagesError(e))
    }
  }
}
