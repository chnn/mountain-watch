import {combineReducers} from 'redux'
import {SET_ADDING_LOCATION, ADD_NEW_LOCATION} from './actions'

const LOCATIONS_FIXTURE = [
  {gps: '45.3736219,-121.7003285', name: 'Mt. Hood', id: '1'},
  {gps: '46.860203,-121.7849626', name: 'Mt. Rainer', id: '2'},
  {gps: '48.537632,-121.1386604', name: 'Eldorado Peak', id: '3'},
]

const LOCATION_IMAGES_FIXTURE = [
  {
    id: '1',
    imgUrl: 'https://picsum.photos/600/600?random',
    thumbnailUrl: 'https://picsum.photos/150/150?random',
    user: 'chnn',
    description: 'Some image 1.',
    externalLink: 'https://www.instagram.com',
  },
  {
    id: '2',
    imgUrl: 'https://picsum.photos/600/600?random',
    thumbnailUrl: 'https://picsum.photos/150/150?random',
    user: 'chnn',
    description: 'Some image 2.',
    externalLink: 'https://www.instagram.com',
  },
]

export function isAddingNewLocation(state = false, {type, payload}) {
  switch (type) {
    case SET_ADDING_LOCATION:
      return payload.isAddingNewLocation
    default:
      return state
  }
}

export function locations(state = LOCATIONS_FIXTURE, {type, payload}) {
  switch (type) {
    case ADD_NEW_LOCATION:
      return [...state, payload]
    default:
      return state
  }
}

export function locationImages(state = LOCATION_IMAGES_FIXTURE) {
  return state
}

export function currentLocation(state = null) {
  return state
}

export const app = combineReducers({
  isAddingNewLocation,
  currentLocation,
  locations,
  locationImages,
})