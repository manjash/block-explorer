import Transaction from './Transaction'

export interface BlockIdentifier {
  hash: string
  index: number
}

export default interface Block {
  parent_block_identifier?: BlockIdentifier
  block_identifier: BlockIdentifier
  metadata: {
    size: number
    difficulty: number
  }
  transactions: Array<Transaction>
  timestamp: Date
}

export interface Blocks {
  blocks: Block[]
}

export const formatBlockFromJson = ({ block }: any): Block => ({
  ...block,
  timestamp: new Date(block.timestamp),
})
