import React from 'react';
import { shallow } from 'enzyme';
import LocationThumbnails from './LocationThumbnails';

test('renders without crashing', () => {
  const wrapper = shallow(<LocationThumbnails />);

  expect(true).toBe(true);
});
