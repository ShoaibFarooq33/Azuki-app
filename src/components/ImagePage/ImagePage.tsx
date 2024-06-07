/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import data from '../../../utils/data'
import { motion, Variants } from 'framer-motion'

// Define an interface for your data
interface Item {
  src: string
  height?: string
  width?: string
  type: string
  title?: string
}

// Define animation variants
const containerVariants: Variants = {
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

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const ImagePage = () => {
  const [shuffledData, setShuffledData] = useState<Item[][]>([])

  useEffect(() => {
    const shuffledArray = shuffleArray(data)
    setShuffledData(chunkArray(shuffledArray, getRandomNumber(3, 4)))
  }, [])

  const shuffleArray = (array: Item[]) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const chunkArray = (array: Item[], chunkSize: number) => {
    const chunkedArray = []
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize))
    }
    return chunkedArray
  }

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {' '}
      {shuffledData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap space-x-3 space-y-3">
          {row.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl"
              variants={itemVariants}
            >
              {item?.type === 'image' ? (
                <>
                  {' '}
                  <img
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.title}
                    className="cursor-pointer rounded-2xl"
                  />
                </>
              ) : item?.type === 'video/mp4' ? (
                <>
                  <video
                    src={item.src}
                    height={item.height}
                    width={item.width}
                    className="cursor-pointer rounded-2xl"
                    controls
                    autoPlay
                    loop
                    muted
                  ></video>
                </>
              ) : null}
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  )
}

export default ImagePage
