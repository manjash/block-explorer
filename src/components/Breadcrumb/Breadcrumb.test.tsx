import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Breadcrumb, { PillType } from './Breadcrumb'

describe('<Breadcrumb />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <Breadcrumb
        paths={[
          {
            title: 'first element',
            to: '/first',
            type: PillType.Route,
          },
          {
            title: 'second element',
            to: '/second',
            type: PillType.Block,
          },
          {
            title: 'third element',
            to: '/third',
            type: PillType.Block,
          },
        ]}
      />,
    )

    expect(wrapper.find(Link)).toHaveLength(3)
    expect(wrapper.find(Link).at(0).contains('first element')).toBe(true)
    expect(wrapper.find(Link).at(0)!.prop('className')!.indexOf('route')).not.toEqual(-1)

    expect(wrapper.find(Link).at(1).contains('second element')).toBe(true)
    expect(wrapper.find(Link).at(1)!.prop('className')!.indexOf('block')).not.toEqual(-1)

    expect(wrapper.find(Link).at(2).contains('third element')).toBe(true)
    expect(wrapper.find(Link).at(2)!.prop('className')!.indexOf('lastItem')).not.toEqual(-1)
  })
})
