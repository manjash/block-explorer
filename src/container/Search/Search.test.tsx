import React from 'react'

import { shallow } from 'enzyme'
import Autocomplete from '@material-ui/lab/Autocomplete'

import Search from './Search'

describe('<Search />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(Autocomplete)).toHaveLength(1)
  })
})
