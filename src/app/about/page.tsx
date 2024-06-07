'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import AboutPage from '../../components/AboutPage/index'
import ImagePage from '../../components/ImagePage/index'
import LoadingPage from '../../components/LoadingPage/index'

export default function Index() {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <div className="flex flex-row ">
      <div className="fixed z-50 left-9 bottom-10 w-[38vw] min-w-[250px] max-w-[525px] text-white font-sans hidden md:flex md:flex-col">
        <AboutPage setIsShow={setIsShow} />
      </div>
      <div className="max-w-[850px] absolute top-[-20px] right-[-90px] transition-transform duration-300 transform hover:scale-105">
        <ImagePage />
      </div>
    </div>
  )
}
