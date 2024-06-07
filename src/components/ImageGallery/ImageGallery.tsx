/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import data from '../../../utils/data'
import { motion } from 'framer-motion'
import CategoryNav from '@/components/CategoryNav'
interface Item {
  src: string
  height: string
  width: string
  type: string
  title: string
  description: string
  date: string
}
interface props {
  setIsShow: (isShow: boolean) => void
}
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
function YourComponent({ setIsShow }: props) {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setItems(data)
      }, 1000)
    }

    fetchData()
  }, [])

  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-10">
        <CategoryNav setIsShow={setIsShow} />
        {items.map((item, index) => (
          <div key={index}>
            {item.type === 'image' ? (
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={item.src}
                alt={item.title}
                height={item.height}
                width={item.width}
              />
            ) : (
              <video
                className="h-auto max-w-full rounded-lg cursor-pointer cursor-pointer"
                height={item.height}
                width={item.width}
                controls
                autoPlay
                loop
                muted
              >
                <source src={item.src} type={item.type} />
              </video>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default YourComponent
