import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders a .location-list', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.location-list')).to.have.length(1);
});
