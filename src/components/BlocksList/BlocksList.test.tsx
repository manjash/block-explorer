import React from 'react'
import { shallow } from 'enzyme'

import TableRow from '@material-ui/core/TableRow'

import { blockList as mockData } from '../../mocks/BlockMock'
import { StyledTableRow } from '../../components/Table/Table'

import BlocksList from './BlocksList'

describe('<BlocksList />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<BlocksList blockList={mockData(30)} />)
    expect(wrapper.find(TableRow)).toHaveLength(1)
    expect(wrapper.find(StyledTableRow)).toHaveLength(30)
  })
})
