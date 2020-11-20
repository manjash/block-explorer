import React from 'react'
import { shallow } from 'enzyme'

import TableRow from '@material-ui/core/TableRow'

import BlocksList from './BlocksList'

describe('<BlocksList />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<BlocksList />)
    expect(wrapper.find(TableRow)).toHaveLength(1)
  })
})
