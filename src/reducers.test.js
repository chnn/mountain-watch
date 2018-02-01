import {isAddingNewLocation, locations as locationsReducer} from './reducers'
import {setAddingLocation, addNewLocation} from './actions'

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
  const locations = [{id: '1'}, {id: '2'}]
  const result = locationsReducer(locations, addNewLocation({id: '3'}))

  expect(result).toContainEqual({id: '3'})
})
