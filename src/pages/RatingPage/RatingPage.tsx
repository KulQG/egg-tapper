import { BackButton } from '@/components/BackButton/BackButton'
import styles from './RatingPage.module.css'
import CartImage from '../../images/cart.svg'
import { Typography } from '@/components/Typography/Typography'
import { RatingItem } from './components/RatingItem/RatingItem'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/mockAPIs'
import { Loader } from '@/components/Loader/Loader'
import { motion } from 'motion/react'

export default function RatingPage() {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['rating'],
    queryFn: api.getRating,
  })

  const isWaiting = isFetching || isLoading

  return (
    <div className={styles['page-wrapper']}>
      <header>
        <BackButton />
      </header>

      <main>
        <div className={styles.info}>
          <img src={CartImage} alt="Cart" />
          <div>
            <Typography variant="h1">Рейтинг</Typography>
            <Typography>{`Призы будут разыгрываться в соответствии с рейтингом`}</Typography>
          </div>
        </div>

        <div className={styles.rating}>
          {isWaiting ? (
            <Loader />
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Typography variant="h3">
                Кликайте чтобы подняться выше
              </Typography>

              <div className={styles['rating-items']}>
                {data?.data.length ? (
                  data.data.map((i) => (
                    <RatingItem name={i.name} lampsCount={i.lamps} />
                  ))
                ) : (
                  <Typography>Здесь пока ничего нет</Typography>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
