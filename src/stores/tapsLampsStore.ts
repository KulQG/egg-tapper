import { MAX_TAPS_LEVEL } from '@/constants'
import { create } from 'zustand'

interface TapsLampsStore {
  taps: number
  lamps: number
  localTimestamps: number[]

  onTap: () => void
  applyServerState: (d: { taps: number; lamps: number }) => void
  flushLocalTimestamps: () => number[]
}

export const useTapsLampsStore = create<TapsLampsStore>((set, get) => ({
  taps: 0,
  lamps: 0,
  localTimestamps: [],

  onTap: () => {
    set((state) => {
      const now = Date.now()
      const isMaxTaps = state.taps === MAX_TAPS_LEVEL

      return {
        taps: isMaxTaps ? 1 : state.taps + 1,
        lamps: isMaxTaps ? state.lamps + 1 : state.lamps,
        localTimestamps: [...state.localTimestamps, now],
      }
    })
  },

  applyServerState: (data) => {
    set((state) => ({
      taps: Math.max(state.taps, data.taps),
      lamps: Math.max(state.lamps, data.lamps),
    }))
  },

  flushLocalTimestamps: () => {
    const { localTimestamps } = get()
    set({ localTimestamps: [] })
    return localTimestamps
  },
}))
