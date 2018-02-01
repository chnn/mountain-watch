/* global jest */

import React from 'react'
import {shallow, mount} from 'enzyme'
import Modal from './Modal'
import LocationList from './LocationList'
import LocationListLi from './LocationListLi'

test('renders a LocationListLi for each passed location', () => {
  const locations = [{id: '1'}, {id: '2'}, {id: '3'}]
  const wrapper = shallow(<LocationList locations={locations} />)

  expect(wrapper.find(LocationListLi).length).toBe(3)
})

test('should display a modal with when isAddingNewLocation', () => {
  const mockOnHideLocationCreator = jest.fn()

  let wrapper = shallow(
    <LocationList locations={[]} isAddingNewLocation={false} />
  )

  // No modal shows when not adding location
  expect(wrapper.find(Modal).length).toBe(0)

  wrapper = mount(
    <LocationList
      locations={[]}
      isAddingNewLocation={true}
      onHideLocationCreator={mockOnHideLocationCreator}
    />
  )

  // Modal shows when adding location
  expect(wrapper.find(Modal).length).toBe(1)

  wrapper.find('button.close-modal').simulate('click')

  // Clicking the close button on the modal calls the right prop
  expect(mockOnHideLocationCreator).toHaveBeenCalledTimes(1)
})

test('should call onShowLocationCreator when button is clicked', () => {
  const mockProp = jest.fn()
  const wrapper = shallow(
    <LocationList locations={[]} onShowLocationCreator={mockProp} />
  )

  wrapper.find('button.show-location-creator').simulate('click')

  expect(mockProp.mock.calls.length).toBe(1)
})
