/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
export default function HomePage({}) {
  return (
    <div className="container mt-5">
      <iframe
        className="w-full aspect-[4/3]"
        src="https://static-content.azuki.com/assets/anime_trailer_3c951028-5466-4f8b-9e53-eaced0a9e0611.mp4"
      ></iframe>

      {/* <video width="100vw" height="100vh" controls preload="none">
        <source
          src="https://static-content.azuki.com/assets/anime_trailer_3c951028-5466-4f8b-9e53-eaced0a9e0611.mp4"
          type="video/mp4"
        />
        <track
          src="https://static-content.azuki.com/assets/anime_trailer_3c951028-5466-4f8b-9e53-eaced0a9e0611.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>{' '} */}
    </div>
  )
}
