import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import ConnectedLocationList from '../containers/ConnectedLocationList'

test('renders a ConnectedLocationList', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(ConnectedLocationList).length).toEqual(1)
})
