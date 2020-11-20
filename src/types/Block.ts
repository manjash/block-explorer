export default interface Block {
  height: Number
  size: Number
  transactions: Number
  difficulty?: Number
  hash: String
  timestamp: Date
}

export interface Blocks {
  blocks: Block[]
}
