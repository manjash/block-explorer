import React from 'react'
import { shallow } from 'enzyme'

import Alert from '../../components/Alert/Alert'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import InformationPanel from '../../components/InformationPanel/InformationPanel'
import ReceiptsList from '../../components/ReceiptsList/ReceiptsList'
import SpendsList from '../../components/SpendsList/SpendsList'

import * as hooks from '../../services/useGetService'
import { ServiceState } from '../../types/Service'

import TransactionDetailPage from './TransactionDetailPage'
import SmallChip from '../../components/SmallChip/SmallChip'

describe('<TransactionDetailPage />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<TransactionDetailPage />)
    expect(wrapper.find(BoxWrapper)).toHaveLength(1)
    expect(wrapper.find(Alert)).toHaveLength(0)
  })

  test('It renders correctly the alert', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.ERROR,
      error: new Error('error message'),
    })

    const wrapper = shallow(<TransactionDetailPage />)
    expect(wrapper.find(Alert)).toHaveLength(1)
    expect(wrapper.find(InformationPanel)).toHaveLength(0)
  })

  test('It renders no data while loading', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADING,
    })

    const wrapper = shallow(<TransactionDetailPage />)
    expect(wrapper.find(Alert)).toHaveLength(0)
    expect(wrapper.find(InformationPanel)).toHaveLength(0)
  })

  test('It renders panel', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADED,
      payload: {
        result: {
          hash: 'c62d378ef9cbc0764a8ef556d8bb541b03373426634a6e8e70f42533ec325c33',
          timestamp: '2020-11-09 23:00:06 UTC',
          // confirmations: '2',
          size: '75992',
          fee: '0.0001',
          spends: [],
          notes: [],
          block: {
            hash: '841dc592f60746a289ced676dfff52d1',
            index: '2227131',
          },
        },
      },
    })

    const wrapper = shallow(<TransactionDetailPage />)
    expect(wrapper.find(Alert)).toHaveLength(1)
    expect(wrapper.find(InformationPanel)).toHaveLength(1)
    expect(wrapper.find(SpendsList)).toHaveLength(1)
    expect(wrapper.find(ReceiptsList)).toHaveLength(1)
  })

  test('it renders a Forked Parent Block chip when main is false', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADED,
      payload: {
        result: {
          hash: 'c62d378ef9cbc0764a8ef556d8bb541b03373426634a6e8e70f42533ec325c33',
          timestamp: '2020-11-09 23:00:06 UTC',
          size: '75992',
          fee: '0.0001',
          spends: [],
          notes: [],
          block: {
            hash: '841dc592f60746a289ced676dfff52d1',
            index: '2227131',
            main: false,
          },
        },
      },
    })

    const wrapper = shallow(<TransactionDetailPage />)
    expect(wrapper.find(SmallChip)).toHaveLength(1)
  })
})
