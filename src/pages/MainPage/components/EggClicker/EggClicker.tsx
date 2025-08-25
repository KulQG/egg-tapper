import { AnimatePresence, motion } from 'motion/react'
import EggImage from '../../../../images/Egg.svg'
import { useTapsLampsStore } from '@/stores/tapsLampsStore'
import styles from './EggClicker.module.css'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/api/mockAPIs'
import { useCallback } from 'react'

export const EggClicker = () => {
  const { onTap: tap, taps } = useTapsLampsStore()

  const { mutate } = useMutation({
    mutationFn: api.updateTaps,
  })

  const onTap = useCallback(() => {
    tap()
    
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className={styles['egg-clicker']}
        whileTap={{ scale: 0.95 }}
        onClick={tap}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img src={EggImage} alt="Egg" />
      </motion.div>
    </AnimatePresence>
  )
}
