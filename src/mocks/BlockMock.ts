import Unusual from 'unusual'
import Block from '../types/Block'
import pkg from '../../package.json'

const u = new Unusual(pkg.version)

const getRandomIntInclusive = (min: number, max: number) => u.integer({ min, max })
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const word = (length: number): string => Array.from({ length }, () => u.pick(alphabet)).join('')

export const generateBlock = (): Block => ({
  id: getRandomIntInclusive(0, 10000),
  sequence: getRandomIntInclusive(10000, 99999),
  hash: `${getRandomIntInclusive(
    0,
    10000,
  )}25a9a4efa997f70c01efd06a3b27d1e5a2346ab1ff9b6147e816de`,
  previous_block_hash: `${getRandomIntInclusive(
    0,
    10000,
  )}25a9a4efa997f70c01efd06a3b27d1e5a2346ab1ff9b6147e816de`,
  main: true,
  difficulty: getRandomIntInclusive(10000, 99999),
  size: getRandomIntInclusive(10000, 99999),
  transactions: [],
  transactionsCount: 0,
  timestamp: new Date(
    2022,
    0,
    1,
    u.integer({ min: 0, max: 23 }),
    u.integer({ min: 0, max: 59 }),
  ),
  graffiti: word(u.integer({ min: 1, max: 16 })),
})

export const generateBlocksWithMatchingHashes = (total: number): Block[] => {
  const list = blockList(total)
  return list
    .sort(({ sequence: a, sequence: b }) => a - b)
    .reduce((agg: Block[], block: Block): Block[] => {
      const prev = agg[agg.length - 1]
      if (prev) {
        const copy = { ...block, previous_block_hash: prev.hash }
        return agg.concat(copy)
      }
      return agg.concat(block)
    }, [])
}

export const blockList = (numberOfBlocks: number): Array<Block> =>
  Array.from({ length: numberOfBlocks }, generateBlock)
