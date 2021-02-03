import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'
import Search from '../../container/Search/Search'

describe('Header', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Header showSearch />)
    expect(wrapper.find(Search)).toHaveLength(1)
    expect(wrapper.find('img')).toHaveLength(1)
  })
})
