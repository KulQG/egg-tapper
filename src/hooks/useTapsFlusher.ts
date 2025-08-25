import { api } from '@/api/mockAPIs'
import { useTapsLampsStore } from '@/stores/tapsLampsStore'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useTapsFlusher = () => {
  const queryClient = useQueryClient()
  const flushLocalTimestamps = useTapsLampsStore((s) => s.flushLocalTimestamps)
  const { mutate } = useMutation({
    mutationFn: api.updateTaps,
    onSuccess: (data) => {
      useTapsLampsStore.getState().applyServerState(data.data)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamps = flushLocalTimestamps()
      if (timestamps.length > 0) {
        mutate({ timestamps })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [flushLocalTimestamps, mutate])

  return null
}
