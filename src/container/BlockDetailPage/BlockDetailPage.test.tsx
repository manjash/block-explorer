import React from 'react'
import { shallow } from 'enzyme'

import Box from '@material-ui/core/Box'

import BlockDetailPage from './BlockDetailPage'

describe('<BlockDetailPage />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<BlockDetailPage />)
    expect(wrapper.find(Box)).toHaveLength(1)
  })
})
