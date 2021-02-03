import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'
import routes from '../../routes/routeSwitch'

describe('<Layout />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Layout routes={routes}>test</Layout>)
    expect(wrapper.find('main')).toHaveLength(1)
  })
})
