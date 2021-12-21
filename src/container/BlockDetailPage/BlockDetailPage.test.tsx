import React from 'react'
import { shallow } from 'enzyme'

import Alert from '../../components/Alert/Alert'
import { generateBlock } from '../../mocks/BlockMock'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import BlockInformationPanel from '../../components/InformationPanel/InformationPanel'
import * as hooks from '../../services/useGetService'
import { ServiceState } from '../../types/Service'

import BlockDetailPage from './BlockDetailPage'
import SmallChip from '../../components/SmallChip/SmallChip'

describe('<BlockDetailPage />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<BlockDetailPage />)
    expect(wrapper.find(BoxWrapper)).toHaveLength(1)
    expect(wrapper.find(Alert)).toHaveLength(0)
  })

  test('It renders correctly the alert', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.ERROR,
      error: new Error('error message'),
    })

    const wrapper = shallow(<BlockDetailPage />)
    expect(wrapper.find(Alert)).toHaveLength(1)
    expect(wrapper.find(BlockInformationPanel)).toHaveLength(0)
  })

  test('It renders no data while loading', () => {
    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADING,
    })

    const wrapper = shallow(<BlockDetailPage />)
    expect(wrapper.find(Alert)).toHaveLength(0)
    expect(wrapper.find(BlockInformationPanel)).toHaveLength(0)
  })

  test('It renders panel', () => {
    const mockedData = generateBlock()

    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADED,
      payload: {
        result: mockedData,
      },
    })

    const wrapper = shallow(<BlockDetailPage />)
    expect(wrapper.find(Alert)).toHaveLength(0)
    expect(wrapper.find(SmallChip)).toHaveLength(1)
    expect(wrapper.find(BlockInformationPanel)).toHaveLength(1)
  })

  test('It renders Forked Block chip when forked block', () => {
    const mockedData = generateBlock()
    mockedData.main = false

    jest.spyOn(hooks, 'default').mockReturnValue({
      status: ServiceState.LOADED,
      payload: {
        result: mockedData,
      },
    })

    const wrapper = shallow(<BlockDetailPage />)
    expect(wrapper.find(SmallChip)).toHaveLength(1)
  })
})
