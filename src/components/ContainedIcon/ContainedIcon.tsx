import type { FC, ReactNode } from 'react'
import styles from './ContainedIcon.module.css'

interface ContainedIconProps {
  icon: ReactNode
}

export const ContainedIcon: FC<ContainedIconProps> = ({ icon }) => {
  return <div className={styles['contained-icon']}>{icon}</div>
}
