import React from 'react'
import { shallow } from 'enzyme'

import Ad from './Ad'

test('It renders correctly Ad', () => {
  const wrapper = shallow(<Ad />)
  expect(wrapper.find('img')).toHaveLength(1)
})
