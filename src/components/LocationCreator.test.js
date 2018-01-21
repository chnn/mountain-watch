import React from 'react';
import { mount } from 'enzyme';
import LocationCreator from './LocationCreator';

test('doesnt call onCreate prop when input is empty', () => {
  const mockOnCreate = jest.fn();
  const wrapper = mount(<LocationCreator onCreate={mockOnCreate} />);

  wrapper.find('.name input').simulate('change', {target: {value: ''}});
  wrapper.find('.gps input').simulate('change', {target: {value: ''}});
  wrapper.find('button[type="submit"]').simulate('submit');

  expect(mockOnCreate).toHaveBeenCalledTimes(0);
});

test('calls onCreate prop when submit button is pressed', () => {
  const mockOnCreate = jest.fn();
  const wrapper = mount(<LocationCreator onCreate={mockOnCreate} />);

  wrapper.find('.name input').simulate('change', {target: {value: 'test name'}});
  wrapper.find('.gps input').simulate('change', {target: {value: 'test gps coordinate'}});
  wrapper.find('button[type="submit"]').simulate('submit');

  expect(mockOnCreate).toHaveBeenCalledTimes(1);
});

