import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import useGetService from './useGetService'
import { ApiUrls } from './servicesUrls'
import { generateBlock } from '../mocks/BlockMock'
import { ServiceState } from '../types/Service'
import Block from '../types/Block'

const mock = new MockAdapter(axios)

const mockedData = generateBlock()

describe('useGetService', () => {
  afterEach(() => {
    mock.reset()
  })

  describe('200', () => {
    beforeEach(() => {
      mock.onPost(ApiUrls.BLOCK_DETAIL_PAGE).reply(200, { block: mockedData })
    })

    it('returns the correct states', async () => {
      const { result } = renderHook(() =>
        useGetService<{ block: Block }>(ApiUrls.BLOCK_DETAIL_PAGE),
      )
      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADING)
      })

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADED)
        if (result.current.status === ServiceState.LOADED) {
          expect(result.current.payload.result.block.sequence).toEqual(mockedData.sequence)
        }
      })
    })

    it('correctly normalize the data', async () => {
      const formatFunction = ({ block }: any): any => {
        return {
          ...block,
          block_identifier: {
            index: `Modified through the format function ${block.block_identifier.index}`,
          },
        }
      }
      const { result } = renderHook(() =>
        useGetService<Block>(ApiUrls.BLOCK_DETAIL_PAGE, {}, formatFunction),
      )

      await act(async () => {})

      await act(async () => {
        expect(result.current.status).toEqual(ServiceState.LOADED)
        if (result.current.status === ServiceState.LOADED) {
          expect(result.current.payload.result.sequence).toEqual(
            `Modified through the format function ${mockedData.sequence}`,
          )
        }
      })
    })

    describe('500', () => {
      beforeEach(() => {
        mock.onPost(ApiUrls.BLOCK_DETAIL_PAGE).reply(500)
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
})
