/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { Carousel } from 'antd'
import BeanzComponent from '../BeanzComponent/BeanzComponent'
import carousalData from '../../../utils/carousalData.json'
import styles from './CustomCarousel.module.css'

export default function CarousalLast() {
  const contentStyle: React.CSSProperties = {
    margin: '129px',
    height: '518px',
    color: '#fff',
    lineHeight: '495px',
    textAlign: 'center',
    // background: '#bb3747',
    borderRadius: '0.75rem',
  }
  const settings = {
    dots: true, // Enable dots
    customPaging: (
      i: any, // Custom function to render dots
    ) => (
      <img
        src={`/Images/img-main/img-${i}.png`}
        alt={`Dot ${i}`}
        className={`${styles.customDot} transition duration-100 translate-y-0  ease-in-out opacity-100 hover:-translate-y-1 hover:scale-[1.5] `}
        style={{
          // width: '50px',
          cursor: 'pointer',
          marginTop: '-125px',
        }}
      />
    ),
    // Other settings...
  }
  return (
    <div className="container rounded">
      <Carousel arrows infinite={false} {...settings}>
        {carousalData.map((item, index) => (
          <div key={index}>
            <div style={{ ...contentStyle, background: `${item.color}` }}>
              <BeanzComponent data={item} />
            </div>{' '}
          </div>
        ))}
        {/* <ul className="mx-auto lg:flex hidden z-[180] relative -translate-y-1/2 space-x-5  justify-center">
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/toshi.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Toshi
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/gus.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Gus
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/tao.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Tao
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/link.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Link
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/johnny.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Johnny G.
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/penny.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Penny
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/ash.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Ash
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/pip.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Pip
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/ed.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Ed
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/frida.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Frida
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="group-hover:-translate-y-2 duration-100  group-hover:scale-125 translate-y-0"
              src="/Images/sun.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Sun
            </p>
          </li>
          <li className="group w-full max-w-20 cursor-pointer  h-20 p-0 border-olive bg-opacity-100 rounded-xl ">
            <img
              className="-translate-y-2 scale-125"
              src="/Images/kami.png"
              alt=""
            />
            <p className="text-center uppercase font-beanz text-base mt-2">
              Kami
            </p>
          </li>
        </ul> */}
        {/* <div>
          <div style={contentStyle}>
            <h1>2</h1>
          </div>{' '}
        </div>
        <div>
          <div style={contentStyle}>
            <h1>3</h1>
          </div>{' '}
        </div>
        <div>
          <div style={contentStyle}>
            <h1>4</h1>
          </div>{' '}
        </div> */}
      </Carousel>{' '}
    </div>
  )
}
