import Transaction from './Transaction'

export default interface Block {
  hash: string
  sequence: number
  previous_block_hash: string
  size: number
  difficulty: number
  transactionsCount?: number
  transactions: Array<Transaction>
  timestamp: Date
  graffiti: string
}

export interface Blocks {
  blocks: Block[]
}

export const formatBlockFromJson = ({ block }: any): Block => ({
  ...block,
  timestamp: new Date(block.timestamp),
})

export const formatBlocksFromJson = (data: any): Block[] =>
  data.map((block: any) => ({
    ...formatBlockFromJson({ block }),
  }))

export function isBlock(x: any): x is Block {
  return typeof x === 'object' && 'transactions' in x && !('block' in x)
}
