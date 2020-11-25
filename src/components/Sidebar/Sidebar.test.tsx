import React from 'react'
import { shallow } from 'enzyme'

import ListItem from '@material-ui/core/ListItem'

import Sidebar from './Sidebar'
import routes from '../../routes/routeSwitch'

describe('<Sidebar />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Sidebar routes={routes} />)
    expect(wrapper.find('img')).toHaveLength(1)
  })

  test('It renders the right menu items', () => {
    const wrapper = shallow(<Sidebar routes={routes} />)
    expect(wrapper.find('a')).toHaveLength(1)
    expect(wrapper.find(ListItem)).toHaveLength(3)
  })
})
