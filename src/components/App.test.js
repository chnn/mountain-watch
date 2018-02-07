import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import Modal from './Modal'
import ImageViewer from './ImageViewer'
import ConnectedLocationList from '../containers/ConnectedLocationList'

test('renders a ConnectedLocationList', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(ConnectedLocationList).length).toEqual(1)
})

test('renders a Modal and ImageViewer if an image is selected', () => {
  let wrapper = shallow(<App selectedImage={null} />)

  // Nothing rendered if no image selected
  expect(wrapper.find(Modal).length).toEqual(0)

  const fakeImage = {id: '0'}

  wrapper = shallow(<App selectedImage={fakeImage} />)

  expect(
    wrapper
      .find(Modal) // Should have a Modal
      .dive()
      .find(ImageViewer) // That contains an ImageViewer
      .prop('image') // That renders the correct image
  ).toEqual(fakeImage)
})
