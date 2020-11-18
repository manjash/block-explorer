import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'
import Sidebar from '../../components/Sidebar/Sidebar'
import routes from '../../routes'

describe('<Layout />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Layout routes={routes}>test</Layout>)
    expect(wrapper.find(Sidebar)).toHaveLength(1)
    expect(wrapper.find('main')).toHaveLength(1)
  })
})
