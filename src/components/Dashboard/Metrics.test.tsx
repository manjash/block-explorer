import React from 'react'
import { shallow } from 'enzyme'

import Metrics from './Metrics'
import Stat from './Stat'

describe('<Metrics />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Metrics />)
    expect(wrapper.find(Stat)).toHaveLength(8)
  })
})
