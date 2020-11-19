import React from 'react'
import { shallow } from 'enzyme'

import BlockDetailPage from './BlockDetailPage'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'

describe('<BlockDetailPage />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<BlockDetailPage />)
    expect(wrapper.find(BoxWrapper)).toHaveLength(1)
  })
})
