import React from 'react';
import { shallow } from 'enzyme';
import LocationList from './LocationList';
import LocationListLi from './LocationListLi';

test('renders a LocationListLi for each passed location', () => {
  const locations = [{id: '1'}, {id: '2'}, {id: '3'}];
  const wrapper = shallow(<LocationList locations={locations} />);

  expect(wrapper.find(LocationListLi).length).toBe(3);
});
