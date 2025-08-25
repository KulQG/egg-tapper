import { AnimatePresence, motion } from 'motion/react'
import { type FC } from 'react'
import styles from './Hint.module.css'
import { Typography } from '../Typography/Typography'
import { useTapsLampsStore } from '@/stores/tapsLampsStore'

interface HintProps {
  text: string
}

export const Hint: FC<HintProps> = ({ text }) => {
  const { lamps, taps } = useTapsLampsStore()

  const isVisible = lamps < 1 && taps < 1

  return (
    <motion.div
      className={styles.hint}
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      <Typography>{text}</Typography>
    </motion.div>
  )
}
