import { motion } from 'motion/react'
import EggImg from '../../images/Egg.svg'
import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <motion.div
      className={styles['loading-wrapper']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.1, // Небольшая задержка перед исчезновением
          duration: 0.3,
        },
      }}
      transition={{ ease: 'easeOut', duration: 0.4 }}
    >
      <motion.img
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, ease: 'easeInOut', duration: 2 }}
        src={EggImg}
        alt="Loading..."
      />
    </motion.div>
  )
}
