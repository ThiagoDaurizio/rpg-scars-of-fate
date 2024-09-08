'use client'
import React, { useState } from 'react'
import { genericIcons } from '@/app/assets/icons'

interface IProps {

  classePath: string
}

const PortraitSlider = ( { classePath }:IProps ) => {
  const [actualPortrait, set_actualPortrait] = useState<number>(1)

  const handleArrows = (order: boolean) => {
    if(order) {
      if(actualPortrait < 6) {
        set_actualPortrait(actualPortrait + 1)
      }

      if(actualPortrait === 6) {
        set_actualPortrait(1)
      }
    }

    if(!order) {
      if(actualPortrait > 1) {
        set_actualPortrait(actualPortrait - 1)
      }

      if(actualPortrait === 1) {
        set_actualPortrait(6)
      }
    }
  }

  return (
    <div className="relative w-fit m-auto">
      <div className="w-[350px] h-[500px] max-w-[80vw] overflow-hidden rounded-md">
        <img className='object-cover h-full transform translate-y-[-25px]' src={`/portraits/${classePath}${actualPortrait}.png`}/>
      </div>
      <div className="absolute w-full flex justify-between top-[40%] transform translate-y-[-50%]">
        <button className="text-4xl" onClick={() => handleArrows(false)}><genericIcons.ArrowToLeft/></button>
        <button className="text-4xl" onClick={() => handleArrows(true)}><genericIcons.ArrowToRight/></button>
      </div>
    </div>
  )
}

export default PortraitSlider