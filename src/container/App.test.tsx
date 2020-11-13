import React from 'react'

import { shallow } from 'enzyme'

import App from './App'
import Layout from '../layout/Layout'

test('It renders correctly App', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Layout)).toHaveLength(1)
})
