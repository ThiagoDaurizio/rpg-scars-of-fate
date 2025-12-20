'use client'
import React, { useState } from 'react'

import { genericIcons } from '@/app/assets/icons'

const menuItems = [
  {url: '/', label: 'Inicio'},
  {url: '/classes', label: 'Classes'},
  {url: '/bestiary', label: 'Bestiário'},
  {url: '/lore/dieties', label: 'Divindades'}
]

const Menubar = () => {
  const [isOpened, set_isOpened] = useState<boolean>(false)

  const handleBackdrop = (id: string) => {
    if(id === 'menubackdrop'){
      set_isOpened(false)
    }
  }

  return (
    <div className="flex flex-col fixed top-2 left-2 z-50">
      {isOpened &&(
        <div
          id="menubackdrop"
          className="w-screen h-screen bg-slate-900/35 absolute -top-2 -left-2"
          onClick={(event) => handleBackdrop((event.target as HTMLElement).id)}
        />
      )}
      <span onClick={() => set_isOpened(!isOpened)} 
        className={`inline-block transition-transform duration-300 bg-slate-700 p-2 rounded-full rounded-tl-lg w-fit h-fit z-20 border border-slate-400 cursor-pointer hover:text-amber-400`}
      >
        <genericIcons.CloseIcon 
          className='transform duration-500'
          style={{transform: isOpened ? 'rotate(0deg)' : 'rotate(45deg)'}} 
        />
      </span>

      {isOpened &&(
        <div className="flex flex-col gap-2 bg-slate-700 p-4 tranform translate-x-4 -translate-y-4 z-10 border border-slate-400 rounded-md">
          {menuItems.map((item, index) => {
            return(
              <a key={index} href={item.url} className="bg-slate-800 p-4 py-2 text-center rounded-md hover:bg-slate-800/85 hover:text-slate-100 font-bold">{item.label}</a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Menubar