import Block from '../types/Block'

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateBlock = (): Block => {
  return {
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
    timestamp: new Date(),
    graffiti: 'blahblahblah',
  }
}

export const blockList = (numberOfBlocks: number): Array<Block> => {
  return Array.from({ length: numberOfBlocks }, () => generateBlock())
}
