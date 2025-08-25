import { Button } from '@/components/Button/Button'
import { Typography } from '@/components/Typography/Typography'
import { useNavigate } from '@tanstack/react-router'
import styles from './Footer.module.css'

export const Footer = () => {
  const nav = useNavigate()

  return (
    <footer className={styles['footer-navigation']}>
      <a href="https://example.com">
        <Button>
          <Typography variant="h3">Призы</Typography>
        </Button>
      </a>
      <Button onClick={() => nav({ to: '/rating', viewTransition: true })}>
        <Typography variant="h3">Рейтинг</Typography>
      </Button>
    </footer>
  )
}
