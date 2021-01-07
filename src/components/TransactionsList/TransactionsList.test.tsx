import React from 'react'
import { shallow } from 'enzyme'

import TableRow from '@material-ui/core/TableRow'

import { StyledTableRow } from '../../components/Table/Table'

import TransactionsList from './TransactionsList'

describe('<TransactionsList />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <TransactionsList
        transactions={[
          {
            transaction_identifier: {
              hash: '041e4a5c6fe659fds31f087059a2db6be65928765899b6110127ce169e4edfb',
            },
            metadata: {
              size: 1156,
              spends: [],
              notes: [],
            },
            operations: [],
            fee: 0.03283901,
            timestamp: new Date(),
          },
          {
            transaction_identifier: {
              hash: '042e4a5c6fe6591sf0f0f087059a2db6be65928765899b6110127ce169e4edfb',
            },
            metadata: {
              size: 1156,
              spends: [],
              notes: [],
            },
            operations: [],
            timestamp: new Date(),
            fee: 0.01083901,
          },
        ]}
      />,
    )
    expect(wrapper.find(TableRow)).toHaveLength(1)
    expect(wrapper.find(StyledTableRow)).toHaveLength(2)
  })
})
