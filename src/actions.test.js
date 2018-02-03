/* global jest */

import {selectLocation} from './actions'

test('selectLocation action with successful api response', async () => {
  const fakeLocation = {id: '1'}
  const innerAction = selectLocation(fakeLocation)
  const mockDispatch = jest.fn()
  const mockApi = {fetchImagesForLocation: jest.fn().mockReturnValue('abc')}

  await innerAction(mockDispatch, null, mockApi)

  expect(mockDispatch).toHaveBeenCalledTimes(4)
  expect(mockDispatch.mock.calls[2][0].payload).toEqual('abc')
})

test('selectLocation action with error api response', async () => {
  const fakeLocation = {id: '1'}
  const innerAction = selectLocation(fakeLocation)
  const mockDispatch = jest.fn()
  const fakeApiResponse = Promise.reject('error message')
  const mockApi = {
    fetchImagesForLocation: jest.fn().mockReturnValue(fakeApiResponse),
  }

  await innerAction(mockDispatch, null, mockApi)

  expect(mockDispatch).toHaveBeenCalledTimes(2)
  expect(mockDispatch.mock.calls[1][0].payload).toEqual('error message')
})
