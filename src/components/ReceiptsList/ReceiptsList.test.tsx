import React from 'react'
import { shallow } from 'enzyme'

import TableRow from '@material-ui/core/TableRow'

import { StyledTableRow } from '../../components/Table/Table'

import ReceiptsList from './ReceiptsList'

describe('<ReceiptsList />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <ReceiptsList
        receipts={[
          {
            noteCommitment: '041e4a5c6fe659fds31f087059a2db6be65928765899b6110127ce169e4edfb',
          },
          {
            noteCommitment: '042e4a5c6fe6591sf0f0f087059a2db6be65928765899b6110127ce169e4edfb',
          },
        ]}
      />,
    )
    expect(wrapper.find(TableRow)).toHaveLength(1)
    expect(wrapper.find(StyledTableRow)).toHaveLength(2)
  })
})
