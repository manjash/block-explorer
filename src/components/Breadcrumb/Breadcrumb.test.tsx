import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Breadcrumb from './Breadcrumb'

describe('<Breadcrumb />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <Breadcrumb
        paths={[
          {
            title: 'first element',
            to: '/first',
            logo: '',
          },
          {
            title: 'second element',
            to: '/second',
            logo: '',
          },
          {
            title: 'third element',
            to: '/third',
            logo: '',
          },
        ]}
      />,
    )

    expect(wrapper.find(Link)).toHaveLength(4)
    expect(wrapper.find(Link).at(1).contains('first element')).toBe(true)
    expect(wrapper.find(Link).at(2).contains('second element')).toBe(true)
    expect(wrapper.find(Link).at(3).contains('third element')).toBe(true)
  })
})
