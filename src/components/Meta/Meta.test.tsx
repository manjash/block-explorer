import React from 'react'
import { shallow } from 'enzyme'

import Meta from './Meta'
import { RoutePath } from '../../routes/routePath'

describe('<Meta />', () => {
  describe('Dashboard route', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(<Meta path={RoutePath.Home} />)
      expect(wrapper.find('title').text()).toEqual(
        'app.dashboard.meta.title - app.meta.defaultTitle',
      )
      expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(
        'app.meta.defaultDescription',
      )
      expect(wrapper.find('meta[name="keywords"]').prop('content')).toEqual(
        'app.meta.defaultKeywords',
      )
      expect(wrapper.find('link[rel="canonical"]').prop('href')).toEqual(
        'https://explorer.ironfish.network/',
      )
    })
  })

  describe('Explorer route', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(<Meta path={RoutePath.Explorer} />)
      expect(wrapper.find('title').text()).toEqual(
        'app.explorer.meta.title - app.meta.defaultTitle',
      )
      expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(
        'app.meta.defaultDescription',
      )
      expect(wrapper.find('meta[name="keywords"]').prop('content')).toEqual(
        'app.meta.defaultKeywords',
      )
      expect(wrapper.find('link[rel="canonical"]').prop('href')).toEqual(
        'https://explorer.ironfish.network/explorer',
      )
    })
  })

  describe('BlockDetailPage route', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(
        <Meta
          path={RoutePath.BlockDetailPage}
          variables={{ id: '13', hash: 'thisisthehash' }}
        />,
      )
      expect(wrapper.find('title').text()).toEqual(
        'app.blockDetailPage.meta.title13,thisisthehash - app.meta.defaultTitle',
      )
      expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(
        'app.blockDetailPage.meta.description13,thisisthehash',
      )
      expect(wrapper.find('meta[name="keywords"]').prop('content')).toEqual(
        'app.meta.defaultKeywords',
      )
      expect(wrapper.find('link[rel="canonical"]').prop('href')).toEqual(
        'https://explorer.ironfish.network/blocks/13',
      )
    })
  })

  describe('TransactionDetailPage route', () => {
    test('It renders correctly', () => {
      const wrapper = shallow(
        <Meta
          path={RoutePath.TransactionDetailPage}
          variables={{ hash: 'thisisthehash', blockHash: 'block1' }}
        />,
      )
      expect(wrapper.find('title').text()).toEqual(
        'app.transactionDetailPage.meta.titlethisisthehash,block1 - app.meta.defaultTitle',
      )
      expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(
        'app.transactionDetailPage.meta.descriptionthisisthehash,block1',
      )
      expect(wrapper.find('meta[name="keywords"]').prop('content')).toEqual(
        'app.meta.defaultKeywords',
      )
      expect(wrapper.find('link[rel="canonical"]').prop('href')).toEqual(
        'https://explorer.ironfish.network/transaction/thisisthehash/block1?',
      )
    })
  })
})
