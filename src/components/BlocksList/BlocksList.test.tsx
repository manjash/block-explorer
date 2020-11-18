import React from 'react'
import { shallow } from 'enzyme'

import TableRow from '@material-ui/core/TableRow'

import BlocksList from './BlocksList'
import { blockList as mockData } from '../../components/BlocksList/BlockMock'

describe('<BlocksList />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<BlocksList blockList={mockData(30)} />)
    expect(wrapper.find(TableRow)).toHaveLength(1)
  })
})
