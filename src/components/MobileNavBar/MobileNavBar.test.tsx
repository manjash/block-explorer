import React from 'react'
import { shallow } from 'enzyme'

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import MobileNavBar from './MobileNavBar'
import routes from '../../routes'

describe('<MobileNavBar />', () => {
  test('It renders the right action items', () => {
    const wrapper = shallow(<MobileNavBar routes={routes} />)
    expect(wrapper.find(BottomNavigationAction)).toHaveLength(2)
  })
})
