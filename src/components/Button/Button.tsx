import type { FC, PropsWithChildren } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'
import { motion } from 'motion/react'

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void
  className?: string
}

export const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={clsx([styles.button, className])}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
