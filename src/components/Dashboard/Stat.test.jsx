import React from 'react'
import { shallow } from 'enzyme'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'

import Stat from './Stat'

describe('<Stat />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <Stat icon={AllInclusiveIcon} priority='low' title='test'>
        testvalue
      </Stat>,
    )
    expect(wrapper.find(AllInclusiveIcon)).toHaveLength(1)
    expect(wrapper.html().indexOf('wrapper-low')).not.toEqual(-1)
  })
})
