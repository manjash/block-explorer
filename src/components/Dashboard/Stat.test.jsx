import React from 'react'
import { shallow } from 'enzyme'
import Typography from '@material-ui/core/Typography'

import Stat from './Stat'

describe('<Stat />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <Stat priority='low' title='test'>
        testvalue
      </Stat>,
    )
    expect(wrapper.find(Typography)).toHaveLength(2)
  })
})
