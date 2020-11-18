import React from 'react'

import { shallow } from 'enzyme'

import Explorer from './Explorer'
import BlocksList from '../../components/BlocksList/BlocksList'

describe('<Explorer />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Explorer />)
    expect(wrapper.find(BlocksList)).toHaveLength(1)
  })
})
