import React from 'react'
import { shallow } from 'enzyme'

import LinearProgress from '@material-ui/core/LinearProgress'

import Loading from './Loading'

test('It renders correctly Loading', () => {
  const wrapper = shallow(<Loading />)
  expect(wrapper.find(LinearProgress)).toHaveLength(1)
})
