'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Beanz from '../../components/Beanz/index'

interface props {
  setIsShow: (isShow: boolean) => void
}
export default function Index({ setIsShow }: props) {
  return (
    <div className="flex flex-row justify-around">
      <Beanz />
    </div>
  )
}
