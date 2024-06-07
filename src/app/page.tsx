'use client'

import React from 'react'
import ImageGallery from '@/components/ImageGallery'
import { useState, useEffect } from 'react'
import MainPage from '@/components/MainPage'

export default function Home() {
  const [isShow, setIsShow] = useState(false)
  console.log(isShow)

  return (
    <main className="fixed inset-0 bg-azukigray-900">
      {/* {isShow ? (
        <ImageGallery setIsShow={setIsShow} />
      ) : (
        <MainPage setIsShow={setIsShow} />
      )} */}
    </main>
  )
}
