import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'

import useGetService from './useGetService'
import { ApiUrls } from './servicesUrls'
import { generateBlock } from '../mocks/BlockMock'
import { ServiceState } from '../types/Service'
import Block from '../types/Block'

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox())
const fetchMock = require('node-fetch')
const mockedData = generateBlock()

describe('useGetService', () => {
  beforeAll(() => {
    global.fetch = fetchMock
  })
  afterAll(() => {
    fetchMock.restore()
  })

  describe('200', () => {
    beforeAll(() => {
      fetchMock.mock(ApiUrls.BLOCK_DETAIL_PAGE, mockedData)
      fetchMock.mock(`${ApiUrls.BLOCK_DETAIL_PAGE}?params=abcde`, [])
    })

    it('returns the correct states', async () => {
      const { result } = renderHook(() => useGetService<Block>(ApiUrls.BLOCK_DETAIL_PAGE))

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADING)
      })

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADED)
        if (result.current.status === ServiceState.LOADED) {
          expect(result.current.payload.result.height).toEqual(mockedData.height)
        }
      })
    })

    it('correctly normalize the data', async () => {
      const formatFunction = (any: any): any => {
        return {
          ...any,
          height: `Modified through the format function ${any.height}`,
        }
      }
      const { result } = renderHook(() =>
        useGetService<Block>(ApiUrls.BLOCK_DETAIL_PAGE, {}, formatFunction),
      )

      await act(async () => {})

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADED)
        if (result.current.status === ServiceState.LOADED) {
          expect(result.current.payload.result.height).toEqual(
            `Modified through the format function ${mockedData.height}`,
          )
        }
      })
    })

    it('supports the query params', async () => {
      const { result } = renderHook(() =>
        useGetService<Block>(ApiUrls.BLOCK_DETAIL_PAGE, { params: 'abcde' }),
      )

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADING)
      })

      await act(async () => {
        if (result.current.status === ServiceState.LOADED) {
          expect(result.current.payload.result).toEqual([])
        }
      })
    })
  })

  describe('500', () => {
    beforeAll(() => {
      fetchMock.mock(ApiUrls.BLOCK_DETAIL_PAGE, 500, { overwriteRoutes: true })
    })
    it('returns the correct states', async () => {
      const { result } = renderHook(() => useGetService(ApiUrls.BLOCK_DETAIL_PAGE))

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADING)
      })

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.ERROR)
      })
    })
  })
})
