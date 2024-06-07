/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './ImageCarousel.module.scss'
import { useEffect, useRef, useState } from 'react'
import ImageData from '../../../utils/imageData.json'
import CarousalLast from '../CarousalLast/CarousalLast'

export default function ImageCarousel() {
  const pageRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLUListElement>(null)
  const [rendered, setRendered] = useState(false)
  let count = 3
  let current = 0
  let animation_state = false

  const gotoNum = (index: number) => {
    let pages = pageRef
    const btns = paginationRef.current?.children
    if (btns) {
      if (index !== current) {
        if (index !== current && !animation_state) {
          const preBtn = btns[current] as HTMLLIElement
          animation_state = true
          preBtn.classList.remove(`${styles.active}`)
          setTimeout(() => (animation_state = false), 500)
          btns[index].classList.add(`${styles.active}`)
          const testSlides = pages.current?.children
          if (testSlides) {
            for (let i = 0; i < count; i++) {
              const slide = testSlides[i] as HTMLElement
              slide.style.transition = 'bottom 0.5s ease-in-out'

              slide.style.bottom = (index - i) * 100 + '%'
            }
            current = index
          }
        }
      }
    }
  }

  const gotoNext = () => (current < count - 1 ? gotoNum(current + 1) : false)

  const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : false)
  const btnClick = (e: any) => gotoNum(parseInt(e.target.dataset.slide))
  useEffect(() => {
    if (rendered) {
      let pages = pageRef
      let pagination = paginationRef

      const init = () => {
        const testSlides = pages.current?.children
        if (testSlides) {
          count = testSlides?.length
          if (count) {
            for (let i = 0; i < count; i++) {
              testSlides[i].style.background = `${ImageData[i].color}`
              let btn = document.createElement('li') as HTMLLIElement
              btn.dataset.slide = String(i)
              btn.addEventListener('click', btnClick)
              if (i === 0) {
                btn.classList.add(`${styles.active}`)
              }
              pagination.current?.appendChild(btn)
            }
          }
        }
      }
      pages.current?.addEventListener('wheel', (e) => {
        e.deltaY < 0 ? gotoPrev() : gotoNext()
      })
      init()
    }
    setRendered(true)
  }, [rendered])

  return (
    <>
      <div className={styles.main_container} ref={pageRef}>
        {/* 1st */}
        <div className={`${styles.page} p-6`}>
          <div style={{ marginLeft: '75px' }}>
            <img
              className="lg:w-64 w-20 rotate-6 absolute lg:-top-26 lg:-left-10 -left-4 -top-8"
              src="https://static-content.azuki.com/assets/bsticker.png"
              alt="test"
            />
            <h1 className="text-4xl leading-[.9em] lg:-ml-2 lg:text-[4.2vw] font-bold">
              FROM THE GARDEN TO THE ALLEY
            </h1>
            <br />
            <p>
              A small species that sprouts from the dirt in the garden. While
              they're earnestly driven by the desire to help their Azuki
              friends, some BEANZ simply can't resist the allure of the alley...
            </p>
            <br />
            <a
              className="inline-block hover:bg-opacity-60 duration-300 uppercase font-beanz rounded-full bg-black text-white mt-6 px-6 pb-2 pt-3"
              href="#section1"
            >
              A Trusty Sidekick <span className="pl-2">↓</span>
            </a>
            <a
              className="inline-block ml-2 uppercase hover:bg-opacity-30 duration-300 bg-opacity-20 font-beanz rounded-full bg-white text-white mt-6 px-6 pb-2 pt-3"
              href="/gallery/beanz"
            >
              View Gallery<span className="pl-2">→</span>
            </a>
            <a
              target="_blank"
              className="inline-block ml-2 uppercase hover:bg-opacity-30 duration-300 bg-opacity-20 font-beanz rounded-full bg-white text-white mt-6 px-6 pb-2 pt-3"
              href="https://magiceden.io/collections/ethereum/beanzofficial"
              rel="noreferrer"
            >
              Magic Eden<span className="pl-2">→</span>
            </a>
          </div>
          <div>
            <img
              src="/Images/1.png"
              alt="test image"
              className={`${styles.main_class}`}
            />
          </div>
        </div>

        {/* 2st */}
        <div className={`${styles.page} p-6`}>
          <div style={{ marginLeft: '75px' }}>
            <img
              className="lg:w-64 w-20 rotate-6 absolute lg:-top-26 lg:-left-10 -left-4 -top-8"
              src="https://static-content.azuki.com/assets/bsticker.png"
              alt="test"
            />
            <h1 className="text-4xl leading-[.9em] lg:-ml-2 lg:text-[4.2vw] font-bold">
              <span className="opacity-40">(Almost)</span> ALWAYS BY YOUR SIDE
            </h1>
            <br />
            <p>
              Some like to be a sidekick, but others enjoy kicking it alone.
            </p>
            <br />
            <a
              className="inline-block hover:bg-opacity-60 duration-300 uppercase font-beanz rounded-full bg-black text-white mt-6 px-6 pb-2 pt-3"
              href="#section2"
            >
              For Better or Worse <span className="pl-2">↓</span>
            </a>
          </div>
          <div>
            <img
              src="/Images/2.png"
              alt="test image"
              className={`${styles.main_class}`}
            />
          </div>
        </div>

        {/* 3st */}
        <div className={`${styles.page} p-6`}>
          <div style={{ marginLeft: '75px' }}>
            <img
              className="lg:w-64 w-20 rotate-6 absolute lg:-top-26 lg:-left-10 -left-4 -top-8"
              src="https://static-content.azuki.com/assets/bsticker.png"
              alt="test"
            />
            <h1 className="text-4xl leading-[.9em] lg:-ml-2 lg:text-[4.2vw] font-bold">
              FOR BETTER... <br />
              OR WORSE
            </h1>
            <br />
            <p>
              Being helpful is in their DNA, but some have a slightly different
              definition of “helpful”...
            </p>
            <br />
            <a
              className="inline-block hover:bg-opacity-60 duration-300 uppercase font-beanz rounded-full bg-black text-white mt-6 px-6 pb-2 pt-3"
              href="#section3"
            >
              Meet the Squad <span className="pl-2">↓</span>
            </a>
          </div>
          <div>
            <img
              src="/Images/3.png"
              alt="test image"
              className={`${styles.main_class}`}
            />
          </div>
        </div>
        <div className={`${styles.page} p-6`}>
          <CarousalLast />
        </div>
      </div>
      <ul
        className={`${styles.pagination} ${styles.ImageCarousel_pagination__8hjO51} rounded-sm`}
        ref={paginationRef}
      ></ul>
    </>
  )
}
