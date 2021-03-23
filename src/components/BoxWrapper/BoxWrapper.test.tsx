import React from 'react'
import { shallow } from 'enzyme'

import BoxWrapper from './BoxWrapper'

describe('<BoxWrapper />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<BoxWrapper header='test title'>test value</BoxWrapper>)

    expect(wrapper.contains('test value')).toBe(true)
    expect(wrapper.contains('test title')).toBe(true)
  })
})
