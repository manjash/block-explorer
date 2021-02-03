import React from 'react'
import { shallow } from 'enzyme'

import InformationPanel from './InformationPanel'
import Information from '../Information/Information'

describe('<InformationPanel />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(<InformationPanel size='2' />)
    expect(wrapper.find(Information)).toHaveLength(1)
  })
})
