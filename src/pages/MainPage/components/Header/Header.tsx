import { ContainedIcon } from '@/components/ContainedIcon/ContainedIcon'
import { MonitoringItem } from '@/components/MonitoringItem/MonitoringItem'
import { Typography } from '@/components/Typography/Typography'
import { IconClickHand } from '@/icons/IconClickHand'
import { IconLamp } from '@/icons/IconLamp'
import { useTapsLampsStore } from '@/stores/tapsLampsStore'
import styles from './Header.module.css'
import { Range } from '@/components/Range/Range'
import { MAX_TAPS_LEVEL } from '@/constants'

export const Header = () => {
  const { lamps, taps } = useTapsLampsStore()

  return (
    <header className={styles.header}>
      <Typography>Шкала роста</Typography>
      <Range min={0} max={MAX_TAPS_LEVEL} value={taps} />
      <MonitoringItem
        count={lamps}
        icon={<ContainedIcon icon={<IconLamp />} />}
        className={styles['monitoring-item-header']}
      />
      <MonitoringItem
        count={taps}
        icon={<ContainedIcon icon={<IconClickHand />} />}
        className={styles['monitoring-item-header']}
      />
    </header>
  )
}
