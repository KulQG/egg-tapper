import { Hint } from '@/components/Hint/Hint'
import { Header } from './components/Header/Header'
import styles from './MainPage.module.css'
import { EggClicker } from './components/EggClicker/EggClicker'
import { Footer } from './components/Footer/Footer'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/mockAPIs'
import { AnimatePresence, motion } from 'motion/react'
import { Loading } from '@/components/Loading/Loading'
import { useEffect } from 'react'
import { useTapsLampsStore } from '@/stores/tapsLampsStore'
import { useTapsFlusher } from '@/hooks/useTapsFlusher'

function MainPage() {
  const setTapsLamps = useTapsLampsStore((s) => s.applyServerState)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: api.getUser,
    refetchOnWindowFocus: false,
    refetchInterval: 10_000,
    staleTime: 5000,
  })

  const isWaiting = isLoading && !data

  useTapsFlusher();

  useEffect(() => {
    if (!data?.data) return

    setTapsLamps(data.data)
  }, [isFetching, isLoading, data])

  return (
    <AnimatePresence mode="wait">
      {isWaiting ? (
        <Loading />
      ) : (
        <motion.div
          key="content"
          className={styles['page-wrapper']}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1],
            duration: 0.5,
            opacity: { duration: 0.4 },
          }}
        >
          <Header />
          <main>
            <Hint text="Тапайте на яйцо, чтобы зарабатывать клики и обменивать на лампы" />
            <EggClicker />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MainPage
