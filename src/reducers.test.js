import {
  makeInitialRemoteDataState,
  isAddingNewLocation,
  locations as locationsReducer,
  selectedLocation as selectedLocationReducer,
  selectedLocationImages as selectedLocationImagesReducer,
} from './reducers'
import {
  setAddingLocation,
  addNewLocations,
  setSelectedLocation,
  setSelectedLocationImages,
  setSelectedLocationImagesStatus,
  setSelectedLocationImagesError,
} from './actions'

test('sets isAddingNewLocation correctly', () => {
  const result1 = isAddingNewLocation(false, setAddingLocation(true))
  const result2 = isAddingNewLocation(true, setAddingLocation(true))
  const result3 = isAddingNewLocation(true, setAddingLocation(false))
  const result4 = isAddingNewLocation(false, setAddingLocation(false))

  expect(result1).toEqual(true)
  expect(result2).toEqual(true)
  expect(result3).toEqual(false)
  expect(result4).toEqual(false)
})

test('adds a location successfully', () => {
  const initialState = {
    ...makeInitialRemoteDataState(),
    data: [{id: '1'}, {id: '2'}],
  }

  const result = locationsReducer(
    initialState,
    addNewLocations([{id: '3'}, {id: '4'}])
  )

  expect(result.data).toContainEqual({id: '1'})
  expect(result.data).toContainEqual({id: '2'})
  expect(result.data).toContainEqual({id: '3'})
  expect(result.data).toContainEqual({id: '4'})
})

test('sets selectedLocation successfully', () => {
  const initialState = null

  const result = selectedLocationReducer(
    initialState,
    setSelectedLocation('abc')
  )

  expect(result).toEqual('abc')
})

test('sets selctedLocationImages data correctly', () => {
  const newImages = ['a', 'b', 'c']
  const initialState = {
    status: 'loading',
    error: null,
    data: [],
  }

  const result = selectedLocationImagesReducer(
    initialState,
    setSelectedLocationImages(newImages)
  )

  expect(result.data).toEqual(newImages)
})

test('sets selectedLocationImages status correctly', () => {
  const initialState = {
    status: 'failed',
    error: 'error message',
    data: ['a', 'b', 'c'],
  }

  const result = selectedLocationImagesReducer(
    initialState,
    setSelectedLocationImagesStatus('loading')
  )

  expect(result.status).toEqual('loading')

  // The rest of the remote data object should remain unchanged
  expect(result.error).toEqual(initialState.error)
  expect(result.data).toEqual(initialState.data)
})

test('sets selectedLocationImages error correctly', () => {
  const error = 'error message'
  const initialState = {
    status: 'loading',
    error: null,
    data: ['a', 'b', 'c'],
  }

  const result = selectedLocationImagesReducer(
    initialState,
    setSelectedLocationImagesError(error)
  )

  expect(result.error).toEqual(error)
  expect(result.status).toEqual('failed')
  expect(result.data).toEqual(initialState.data)
})
