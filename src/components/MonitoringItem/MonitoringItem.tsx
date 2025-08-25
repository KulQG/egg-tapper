import { useEffect, type FC, type ReactNode } from 'react'
import { Typography } from '../Typography/Typography'
import styles from './MonitoringItem.module.css'
import clsx from 'clsx'
import { motion, useAnimation } from 'motion/react'

interface MonitoringItemProps {
  count: number
  icon: ReactNode
  className?: string
}

export const MonitoringItem: FC<MonitoringItemProps> = ({
  count,
  icon,
  className,
}) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3, ease: 'easeInOut' },
    })
  }, [count, controls])

  return (
    <motion.div
      animate={controls}
      className={clsx([styles['monitoring-item'], className])}
    >
      <Typography>{count}</Typography>
      {icon}
    </motion.div>
  )
}
