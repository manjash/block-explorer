import Transaction from './Transaction'

export interface BlockIdentifier {
  hash: string
  index: number
}

export default interface Block {
  id: number
  created_at: Date
  updated_at: Date
  hash: string
  sequence: number
  previous_block_hash: string | null
  difficulty: number
  main: boolean
  network_version: number
  transactionsCount: number
  timestamp: Date
  graffiti: string
  searchable_text: string
  size: number
  transactions: Transaction[]
}

export interface Blocks {
  blocks: Block[]
}

export const formatBlockFromJson = ({ block }: any): Block => ({
  ...block,
  timestamp: new Date(block.timestamp),
})

export const formatBlocksFromJson = ({ data }: any): Block[] =>
  data.map((block: any) => ({
    ...formatBlockFromJson({ block }),
  }))

export function isBlock(x: any): x is Block {
  return typeof x === 'object' && 'block_identifier' in x && !('transaction_identifier' in x)
}
