/* global jest */

import React from 'react'
import {shallow} from 'enzyme'
import LocationThumbnails from './LocationThumbnails'
import LocationThumbnail from './LocationThumbnail'

test('calls onSelectImage when a thumbnail is clicked', () => {
  const fakeImages = {data: [{id: '1'}]}
  const mockOnSelectImage = jest.fn()
  const wrapper = shallow(
    <LocationThumbnails images={fakeImages} onSelectImage={mockOnSelectImage} />
  )

  wrapper
    .find(LocationThumbnail)
    .dive()
    .simulate('click')

  expect(mockOnSelectImage).toBeCalledWith(fakeImages.data[0])
})
