import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'
import Search from '../../container/Search/Search'

describe('Header', () => {
  describe('small breakpoint', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(<Header isSmallBreakpoint={true} />)
      expect(wrapper.find(Search)).toHaveLength(1)
      expect(wrapper.find('img')).toHaveLength(1)
    })
  })
  describe('not small breakpoint', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(<Header isSmallBreakpoint={false} />)
      expect(wrapper.find(Search)).toHaveLength(1)
      expect(wrapper.find('img')).toHaveLength(0)
    })
  })
})
