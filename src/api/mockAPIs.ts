import {
  type User,
  type RatingItem,
  type TapSession,
  type ApiResponse,
} from './types'

let mockUser: User = { lamps: 42, taps: 150 }
const mockRating: RatingItem[] = [
  { name: 'User1', lamps: 100 },
  { name: 'User2', lamps: 85 },
  { name: 'User3', lamps: 72 },
  { name: 'User4', lamps: 68 },
  { name: 'User5', lamps: 55 },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const api = {
  getUser: async (): Promise<ApiResponse<User>> => {
    await delay(500)
    return {
      data: { ...mockUser },
      success: true,
    }
  },

  getRating: async (): Promise<ApiResponse<RatingItem[]>> => {
    await delay(700)
    return {
      data: [...mockRating],
      success: true,
    }
  },

  updateTaps: async (session: TapSession): Promise<ApiResponse<User>> => {
    await delay(300)

    const newTaps = mockUser.taps + session.timestamps.length
    mockUser = {
      ...mockUser,
      taps: newTaps,
    }

    return {
      data: { ...mockUser },
      success: true,
      message: 'Taps updated successfully',
    }
  },

}
