import React from 'react'
import { shallow } from 'enzyme'
import ReceiptIcon from '@material-ui/icons/Receipt'

import Information from './Information'

describe('<Information />', () => {
  test('It renders correctly', () => {
    const wrapper = shallow(
      <Information title='test title' icon={ReceiptIcon}>
        test value
      </Information>,
    )

    expect(wrapper.contains('test value')).toBe(true)
    expect(wrapper.contains('test title')).toBe(true)
  })
})
