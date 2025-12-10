'use client'
import { AnimatePresence, motion } from 'motion/react'

import { useGetUrls } from '@/lib/queries/url'
import Header from './components/Header'
import UrlForm from './components/UrlForm'
import UrlList from './components/UrlList'

export default function Home() {
  const { data } = useGetUrls()

  return (
    <div className="flex min-h-screen items-center justify-around bg-foreground flex-col">
      <Header />

      <UrlForm />

      <AnimatePresence>
        {(data?.length ?? 0) > 0 && (
          <motion.div
            key="url-list"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-1/3"
          >
            <UrlList />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
