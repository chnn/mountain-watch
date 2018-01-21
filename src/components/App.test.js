import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import VisibleLocationList from '../containers/VisibleLocationList';
import LocationThumbnails from './LocationThumbnails';

test('renders a VisibleLocationList', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(VisibleLocationList).length).toEqual(1);
});

test('renders a LocationThumbnails', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(LocationThumbnails).length).toEqual(1);
});
