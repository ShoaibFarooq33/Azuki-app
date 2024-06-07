'use client'

import React from 'react'
import AboutPage from '../AboutPage'
import ImagePage from '../ImagePage'
import { useState, useEffect } from 'react'
import LoadingPage from '../LoadingPage'
import HomePage from '../HomePage/HomePage'
import MainNavbar from '../MainNavbar/MainNavbar'
import Beanz from '../Beanz/Beanz'

interface props {
  setIsShow: (isShow: boolean) => void
}
export default function MainPage({ setIsShow }: props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="fixed inset-0 bg-azukigray-900 ">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="flex flex-row justify-around">
            <MainNavbar />
          </div>
        </>
      )}
    </main>
  )
}
