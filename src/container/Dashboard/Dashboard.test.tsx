import React from 'react'

import { shallow } from 'enzyme'

import Dashboard from './Dashboard'
import BlocksList from '../../components/BlocksList/BlocksList'

describe('<Dashboard />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find(BlocksList)).toHaveLength(1)
  })
})
