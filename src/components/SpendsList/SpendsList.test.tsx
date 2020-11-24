import React from 'react'
import { shallow } from 'enzyme'

import TableRow from '@material-ui/core/TableRow'

import { StyledTableRow } from '../../components/Table/Table'

import SpendsList from './SpendsList'

describe('<SpendsList />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <SpendsList
        spends={[
          {
            nullifier: '041e4a5c6fe659fds31f087059a2db6be65928765899b6110127ce169e4edfb',
          },
        ]}
      />,
    )
    expect(wrapper.find(TableRow)).toHaveLength(1)
    expect(wrapper.find(StyledTableRow)).toHaveLength(1)
  })
})
