import React from 'react'
import { shallow } from 'enzyme'

import Metrics from './Metrics'
import Stat from './Stat'

describe('<Metrics />', () => {
  const metricsData = {
    blockTime: 12,
    difficulty: 34,
    height: 5,
    latestHash: 'hsah9192929292jsjjsjsjsjsjs929292929292jsjsjsjjs',
    transactionsCount: 2,
  }

  test('It renders correctly', () => {
    const wrapper = shallow(<Metrics metrics={metricsData} />)
    expect(wrapper.find(Stat)).toHaveLength(6)
  })
})
