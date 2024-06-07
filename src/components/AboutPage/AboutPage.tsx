'use client'
import React, { useState, useEffect } from 'react'
import MainNavbar from '../MainNavbar/index'

interface props {
  setIsShow: (isShow: boolean) => void
}

const AboutPage = ({ setIsShow }: props) => {
  return (
    <div>
      <main className=" inset-0 bg-azukigray-900">
        {' '}
        <div className="flex flex-row justify-around z-50 fixed w-full ">
          <MainNavbar />
        </div>
      </main>
      <h1 className="text-4xl font-black leading-9 mb-4">WHO WE ARE</h1>
      <p className="text-sm md:text-base mb-6">
        Formed by
        <span className="px-[2px] hover:bg-azukicream hover:border-black hover:text-black rounded-sm overlay-primary-white border-b border-white/50 font-medium border-dotted">
          <a rel="noreferrer" target="_blank" href="https://www.chirulabs.com/">
            Chiru Labs
          </a>
        </span>
        , Azuki is an anime brand crafting stories and experiences that blur the
        lines between the physical and digital worlds. Here are some things
        we’ve created so far.
      </p>
      <button
        type="button"
        onClick={() => {
          setIsShow(true)
        }}
        className="square-btn-white-tp py-2.5 px-9 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Explore
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default AboutPage
