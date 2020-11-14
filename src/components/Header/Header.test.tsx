import React from 'react'
import { shallow } from 'enzyme'

import InputBase from '@material-ui/core/InputBase'

import Header from './Header'

describe('Header', () => {
  describe('small breakpoint', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(<Header isSmallBreakpoint={true} />)
      expect(wrapper.find(InputBase)).toHaveLength(1)
      expect(wrapper.find('img')).toHaveLength(1)
    })
  })
  describe('not small breakpoint', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(<Header isSmallBreakpoint={false} />)
      expect(wrapper.find(InputBase)).toHaveLength(1)
      expect(wrapper.find('img')).toHaveLength(0)
    })
  })
})
