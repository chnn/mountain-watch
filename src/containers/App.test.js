import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import LocationList from '../components/LocationList';
import LocationThumbnails from './LocationThumbnails';

it('renders a LocationList', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(LocationList).length).toEqual(1);
});

it('renders a LocationThumbnails', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(LocationThumbnails).length).toEqual(1);
});
