/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import styles from './BeanzComponent.module.css'
import carousalData from '../../../utils/carousalData.json'
export default function BeanzComponent({ data }: any) {
  //   console.log('data', data)
  return (
    <>
      {/* {item.map((data, key) => ( */}
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="">
            <img
              src={data.main_image}
              alt="toshi"
              className={styles.img_class}
            />
          </div>
          <div className="">
            <div className="flex lg:pr-24 justify-center flex-col">
              <h1
                className={`font-beanz lg:text-left text-center lg:px-0 px-6 whitespace-nowrap relative  w-full tracking-tight lg:pb-0 lg:pb-3 w-full lg:-ml-0.5 lg:text-[4.2vw] text-4xl leading-[.9em]  uppercase font-900 mt-5 ${data.fontColor}`}
              >
                {data.heading}
              </h1>
              {/* <div className="lg:font-mono font-sans lg:block grid grid-cols-1 lg:px-0 px-6 tracking-tight uppercasee  lg:text-sm lg:mt-2 mt-4 text-lg lg:leading-2 leading-7 lg:font-400 font-300 w-full"> */}
              <div
                className={`lg:font-mono font-sans lg:block grid grid-cols-1 lg:px-0 px-6 tracking-tight  lg:text-sm lg:mt-2 mt-4 text-lg lg:leading-2 leading-7 lg:font-400 font-300 w-full ${data.fontColor}`}
              >
                <p
                  className={`lg:text-justify bg-white bg-opacity-10 mb-4 tracking-wide rounded pr-4 pl-8 py-3 text-xs leading-5 font-sans relative ${data.fontColor}`}
                >
                  <img
                    className="absolute top-1/2 translate-y-[-52%] w-20 -left-10"
                    src={data.image1}
                    alt={data.heading}
                  />
                  <span
                    className={`absolute -top-1 -right-2 font-600 font-mono bg-white shadow-md px-1.5 text-3xs py-0 rotate-[9deg] rounded ${data.fontColor}`}
                  ></span>
                  {data.para1}
                </p>
                <p className={`lg:text-justify ${data.fontColor}`}>
                  {data.para2}
                </p>
              </div>
              <ul
                className={`lg:pt-6 pt-0 overlay-item lg:grid-cols-3 pb-6 grid lg:gap-3 gap-2 lg:visible lg:grid-cols-3 grid-cols-2 invisible ${data.fontColor}`}
              >
                {data.imageList.map((value: any) => (
                  <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full ">
                    <img
                      className={`w-8 pr-2`}
                      src={value.image}
                      alt={value.title}
                    />
                    <div className="overflow-hidden relative">
                      <p
                        className={`flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto inline-block  ${data.fontColor}`}
                      >
                        <span className={`pt-px ${data.fontColor}`}>
                          {value.name}
                        </span>
                      </p>
                      <p
                        className={`ml-auto truncate text-xs font-600 uppercase ${data.fontColor}`}
                      >
                        {value.title}
                      </p>
                    </div>
                  </li>
                ))}

                {/* <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full ">
                    <img className="w-8 pr-2" src="/Images/Eyes.png" alt="" />
                    <div className="overflow-hidden relative">
                      <p className="flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto inline-block">
                        <span className="pt-px">Eyes:</span>
                      </p>
                      <p className="ml-auto  truncate text-xs font-600 uppercase">
                        DOTS
                      </p>
                    </div>
                  </li>
                  <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full ">
                    <img className="w-8 pr-2" src="/Images/Mouth.png" alt="" />
                    <div className="overflow-hidden relative">
                      <p className="flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto inline-block">
                        <span className="pt-px">Mouth:</span>
                      </p>
                      <p className="ml-auto  truncate text-xs font-600 uppercase">
                        SMILE
                      </p>
                    </div>
                  </li>
                  <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full ">
                    <img
                      className="w-8 pr-2"
                      src="/Images/Clothing.png"
                      alt=""
                    />
                    <div className="overflow-hidden relative">
                      <p className="flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto inline-block">
                        <span className="pt-px">Clothing:</span>
                      </p>
                      <p className="ml-auto  truncate text-xs font-600 uppercase">
                        IKZ HOODIE UP
                      </p>
                    </div>
                  </li>
                  <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full ">
                    <img className="w-8 pr-2" src="/Images/Hand.png" alt="" />
                    <div className="overflow-hidden relative">
                      <p className="flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto inline-block">
                        <span className="pt-px">Hand:</span>
                      </p>
                      <p className="ml-auto  truncate text-xs font-600 uppercase">
                        LEDGER
                      </p>
                    </div>
                  </li>
                  <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full ">
                    <img
                      className="w-8 pr-2"
                      src="/Images/Headgear.png"
                      alt=""
                    />
                    <div className="overflow-hidden relative">
                      <p className="flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto inline-block">
                        <span className="pt-px">Headgear:</span>
                      </p>
                      <p className="ml-auto  truncate text-xs font-600 uppercase">
                        BEAN BASEBALL CAP
                      </p>
                    </div>
                  </li>
                  <li className="text-xs items-center py-2 px-3 flex rounded bg-white bg-opacity-10 w-full ">
                    <img className="w-8 pr-2" src="/Images/Shoe.png" alt="" />
                    <div className="overflow-hidden relative">
                      <p className="flex items-center uppercase opacity-60 font-mono text-2xs tracking-wider mr-auto inline-block">
                        <span className="pt-px">Shoe:</span>
                      </p>
                      <p className="ml-auto  truncate text-xs font-600 uppercase">
                        BLACK HIGH TOPS
                      </p>
                    </div>
                  </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* // ))} */}
    </>
  )
}
