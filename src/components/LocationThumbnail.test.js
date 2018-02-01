import React from 'react'
import {mount} from 'enzyme'
import LocationThumbnail from './LocationThumbnail'

test('renders an image with appropriate src and alt text', () => {
  const fakeImage = {thumbnailUrl: 'a', description: 'a b c'}
  const wrapper = mount(<LocationThumbnail image={fakeImage} />)

  expect(wrapper.find('img').prop('src')).toEqual(fakeImage.thumbnailUrl)
  expect(wrapper.find('img').prop('alt')).toEqual(fakeImage.description)
})
