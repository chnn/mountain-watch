import React from 'react';
import { mount } from 'enzyme';
import LocationListLi from './LocationListLi';

it('renders a name', () => {
  const location = {name: "Name 1", gps: "GPS 1"};
  const wrapper = mount(<LocationListLi location={location} />);

  expect(wrapper.find('.name').text()).toContain(location.name);
});

it('renders the GPS coordinates of the location', () => {
  const location = {name: "Name 1", gps: "GPS 1"};
  const wrapper = mount(<LocationListLi location={location} />);

  expect(wrapper.find('.gps').text()).toContain(location.gps);
});
