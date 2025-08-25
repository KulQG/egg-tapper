import { Typography } from '@/components/Typography/Typography'
import { IconLamp } from '@/icons/IconLamp'
import type { FC } from 'react'
import styles from './RatingItem.module.css'

interface RatingItemProps {
  name: string
  lampsCount: number
}

export const RatingItem: FC<RatingItemProps> = ({ lampsCount, name }) => {
  return (
    <div className={styles['rating-item']}>
      <Typography>{name}</Typography>

      <div className={styles['rating-score']}>
        <Typography>{lampsCount}</Typography>
        <IconLamp />
      </div>
    </div>
  )
}
