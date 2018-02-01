import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import VisibleLocationList from '../containers/VisibleLocationList'
import VisibleLocationThumbnails from '../containers/VisibleLocationThumbnails'

test('renders a VisibleLocationList', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(VisibleLocationList).length).toEqual(1)
})

test('renders a VisibleLocationThumbnails', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(VisibleLocationThumbnails).length).toEqual(1)
})
