import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import LocationThumbnails from './LocationThumbnails';

it('renders without crashing', () => {
  const wrapper = shallow(<LocationThumbnails />);

  expect(true).toBe(true);
});
