/* global jest */

import React from 'react'
import {shallow, mount} from 'enzyme'
import Modal from './Modal'
import LocationList from './LocationList'
import LocationListLi from './LocationListLi'
import LoadingSpinner from './LoadingSpinner'

test('renders a LocationListLi for each location if locations done', () => {
  const fakeLocations = {
    status: 'done',
    data: [{id: '1'}, {id: '2'}, {id: '3'}],
    error: null,
  }
  const wrapper = shallow(<LocationList locations={fakeLocations} />)

  expect(wrapper.find(LocationListLi).length).toBe(3)
})

test('should display a modal with when isAddingNewLocation', () => {
  const fakeLocations = {status: 'done', data: [], error: null}
  const mockOnHideLocationCreator = jest.fn()

  let wrapper = shallow(
    <LocationList locations={fakeLocations} isAddingNewLocation={false} />
  )

  // No modal shows when not adding location
  expect(wrapper.find(Modal).length).toBe(0)

  wrapper = mount(
    <LocationList
      locations={fakeLocations}
      isAddingNewLocation={true}
      onHideLocationCreator={mockOnHideLocationCreator}
    />
  )

  // Modal shows when adding location
  expect(wrapper.find(Modal).length).toBe(1)

  wrapper.find('.dismiss-modal').simulate('click')

  // Clicking the close button on the modal calls the right prop
  expect(mockOnHideLocationCreator).toHaveBeenCalledTimes(1)
})

test('should call onShowLocationCreator when button is clicked', () => {
  const fakeLocations = {status: 'done', data: [], error: null}
  const mockOnShowLocationCreator = jest.fn()
  const wrapper = shallow(
    <LocationList
      locations={fakeLocations}
      onShowLocationCreator={mockOnShowLocationCreator}
    />
  )

  wrapper.find('button.show-location-creator').simulate('click')

  expect(mockOnShowLocationCreator.mock.calls.length).toBe(1)
})

test('should display a loading state if locations loading', () => {
  const fakeLocations = {status: 'loading', data: null, error: null}
  const wrapper = shallow(<LocationList locations={fakeLocations} />)

  expect(wrapper.find(LoadingSpinner).length).toEqual(1)
})

test('should call onLocationLoadError if locations in error state', () => {
  const fakeLocations = {status: 'failed', data: null, error: 'abc'}
  const mockOnLocationLoadError = jest.fn()

  shallow(
    <LocationList
      locations={fakeLocations}
      onLocationLoadError={mockOnLocationLoadError}
    />
  )

  expect(mockOnLocationLoadError.mock.calls[0][0]).toBe(fakeLocations.error)
})

test('should call onSelectLocation when a LocationListLi is clicked', () => {
  const fakeLocations = {
    status: 'done',
    error: null,
    data: [{id: '0'}, {id: '1'}, {id: '2'}],
  }
  const mockOnSelectLocation = jest.fn()
  const wrapper = mount(
    <LocationList
      locations={fakeLocations}
      onSelectLocation={mockOnSelectLocation}
    />
  )

  wrapper
    .find(LocationListLi)
    .first()
    .simulate('click')

  expect(mockOnSelectLocation).toBeCalledWith(fakeLocations.data[0])
})
