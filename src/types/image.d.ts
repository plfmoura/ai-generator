export interface Image {
  id: string
  url: string
  prompt: string
  createdAt: Date
  generatedAt: Date
  userId: string
  status: 'pending' | 'generated' | 'failed'
  cost: number
  isPublic: boolean
  isLiked: boolean
}
