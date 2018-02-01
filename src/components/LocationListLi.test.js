import React from 'react'
import {mount} from 'enzyme'
import LocationListLi from './LocationListLi'

test('renders name and gps coordinates', () => {
  const location = {name: 'Name 1', gps: 'GPS 1'}
  const wrapper = mount(<LocationListLi location={location} />)

  expect(wrapper.find('.name').text()).toContain(location.name)
  expect(wrapper.find('.gps').text()).toContain(location.gps)
})
