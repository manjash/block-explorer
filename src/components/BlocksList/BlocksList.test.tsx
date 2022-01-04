import React from 'react'
import { shallow } from 'enzyme'
import snap from 'enzyme-to-json'

import TableRow from '@material-ui/core/TableRow'

import { generateBlocksWithMatchingHashes as mockData } from '../../mocks/BlockMock'
import { StyledTableRow } from '../../components/Table/Table'

import BlocksList from './BlocksList'

const CLEANUP = /(WithStyles\()+ForwardRef\((\w+)\)\)\)/g
// const snap = (x: any) =>
//   ((json(x) as unknown) as string)
//    .split('\n')
//    .map((z: string) => z.replace(CLEANUP, '$2'))
//    .join('\n')

describe('<BlocksList />', () => {
  test('It renders correctly', () => {
    const data = mockData(3)
    // console.log({ data })
    const wrapper = shallow(<BlocksList blockList={data} />)
    expect(snap(wrapper)).toMatchSnapshot()
    expect(wrapper.find(TableRow)).toHaveLength(1)
    expect(wrapper.find(StyledTableRow)).toHaveLength(30)
  })
})
