import React from 'react'
import {shallow} from 'enzyme'
import LocationThumbnails from './LocationThumbnails'
import LocationThumbnail from './LocationThumbnail'

test('renders a LocationThumbnail for each passed image', () => {
  const fakeLocationImages = [{id: '1'}, {id: '2'}, {id: '3'}]
  const wrapper = shallow(
    <LocationThumbnails locationImages={fakeLocationImages} />
  )

  expect(wrapper.find(LocationThumbnail).length).toBe(3)
})
