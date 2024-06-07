/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function MainNavbar({}) {
  const router = useRouter()
  const pathname = usePathname()

  const navigate = ['about', 'beanz']
  const menuBar = [
    { title: 'about' },
    { title: 'beanz' },
    { title: 'lore' },
    { title: 'more' },
    {
      title: 'socials',
      dropDownIcon: true,
      dropDownList: [
        {
          title: 'azuki',
          items: [
            {
              name: 'instagram',
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              ),
            },
            {
              name: 'x.com',
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              ),
            },
            {
              name: 'youtube',
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              ),
            },
          ],
        },
        {
          title: 'beanz',
          items: [
            {
              name: 'instagram',
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              ),
            },
            {
              name: 'x.com',
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              ),
            },
            {
              name: 'tiktok',
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              ),
            },
          ],
        },
        { title: 'Join Discord' },
      ],
    },
    { title: 'buy' },
  ]
  console.log('router.pathname', pathname)
  if (pathname == '/about') {
    return null
  }
  return (
    <div className="container p-5 uppercase">
      <div className="flex justify-between ">
        <div>
          {' '}
          <img
            alt=""
            fetchPriority="high"
            width="77"
            height="28"
            decoding="async"
            data-nimg="1"
            className="h-7 p-2 rounded bg-red-600 bg-azukired hover:cursor-pointer right-0"
            src="/Images/AzukiLogoWhite.svg"
            style={{ color: 'transparent' }}
            onClick={() => {
              router.push('/')
            }}
          />
        </div>
        <div className="flex gap-8">
          {menuBar.map((menu, key) => (
            <div key={key} className="relative group">
              <div
                className="flex gap-1 items-center hover:cursor-pointer"
                onClick={() => {
                  if (navigate.includes(menu.title)) {
                    router.push(`${menu.title}`)
                  }
                }}
              >
                <div>{menu.title}</div>

                {menu.dropDownIcon && (
                  <div className="absolute top-full left-0 bg-[#CBCBCB] text-black rounded hidden group-hover:block">
                    {menu.dropDownList.map((list, key) => (
                      <div key={key} className="bg-white p-4 m-1 rounded">
                        <div className="text-sm font-pixelfont">
                          {list.title}
                        </div>
                        <hr />
                        {list.items?.map((icon, key) => (
                          <a
                            key={key}
                            href="#"
                            className="block px-4 py-2 flex items-center uppercase text-black"
                          >
                            <span className="[&>svg]:h-5 [&>svg]:w-5 mr-5">
                              {icon.svg}
                            </span>{' '}
                            {icon.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          {' '}
          <button className="cursor-pointer hover:bg-white hover:text-black gap-1 py-2 px-3 rounded-full mb-2 select-none uppercase">
            connect
          </button>
        </div>
      </div>
    </div>
  )
}
