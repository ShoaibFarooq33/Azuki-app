// pages/loading.js
'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

export default function LoadingPage() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    if (percentage < 100) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) => prevPercentage + 1)
      }, 15) // 100ms delay for each increment
      return () => clearInterval(interval)
    }
  }, [percentage])

  return (
    // <div>
      <div
        className={`flex flex-col items-center justify-center ${styles.imageContainer}`}
      >
        {/* <h1 className="text-white text-4xl mb-4">Loading...</h1> */}
        <div className="text-white text-6xl font-Codystar-Light font-bold animate-pulse dotted-text">
          {percentage}%
        </div>
      </div>
    // </div>
  )
}
