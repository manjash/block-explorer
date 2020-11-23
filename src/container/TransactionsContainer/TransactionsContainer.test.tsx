import React from 'react'
import { shallow } from 'enzyme'

import Alert from '../../components/Alert/Alert'
import { generateBlock } from '../../mocks/BlockMock'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import TransactionsList from '../../components/TransactionsList/TransactionsList'
import * as hooks from '../../services/useGetService'
import { ServiceState } from '../../types/Service'

import TransactionsContainer from './TransactionsContainer'

describe('<TransactionsContainer />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<TransactionsContainer hash='abc' />)
    expect(wrapper.find(BoxWrapper)).toHaveLength(1)
    expect(wrapper.find(Alert)).toHaveLength(0)
  })

  test('It renders correctly the alert', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.ERROR,
      error: new Error('error message'),
    })

    const wrapper = shallow(<TransactionsContainer hash='abc' />)
    expect(wrapper.find(Alert)).toHaveLength(1)
    expect(wrapper.find(TransactionsList)).toHaveLength(0)
  })

  test('It renders no data while loading', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADING,
    })

    const wrapper = shallow(<TransactionsContainer hash='abc' />)
    expect(wrapper.find(Alert)).toHaveLength(0)
    expect(wrapper.find(TransactionsList)).toHaveLength(0)
  })

  test('It renders panel', () => {
    const mockedData = generateBlock()

    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADED,
      payload: {
        result: mockedData,
      },
    })

    const wrapper = shallow(<TransactionsContainer hash='abc' />)
    expect(wrapper.find(Alert)).toHaveLength(0)
    expect(wrapper.find(TransactionsList)).toHaveLength(1)
  })
})
