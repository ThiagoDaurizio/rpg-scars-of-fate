'use client'
import CompDivisor from "@/app/components/CompDivisor"
import React, { useState } from "react"

import { genericIcons } from "@/app/assets/icons"

interface IProps {
  image_path: string
  title: string
  body: string
  position: "right" | "left"
}


const ScenesContent = ( { image_path, title, body, position }:IProps ) => {
  const [modalIsOpened, set_modalIsOpened] = useState<boolean>(false)

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'sceneBackdrop') {
      set_modalIsOpened(!modalIsOpened)
    }
  }

  return (
    <div className={`flex flex-col-reverse ${position === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-4 ${position === 'right' ? 'justify-end' : 'justify-start'}`}>
      <div className="flex flex-col items-end w-full">
        <h5 className="text-center lg:text-end pr-2 w-full font-semibold text-lg text-amber-400">{title}</h5>
        <CompDivisor />
        <div className="max-h-[280px] overflow-y-hidden relative p-2">
          <p className="text-start text-xs mt-2" dangerouslySetInnerHTML={{ __html: body }}/>
          {body &&(
            <button 
              className="absolute bottom-0 left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-[rgba(2,2,2,0.5)] to-[rgba(255,255,255,0)] w-full rounded-lg h-full flex items-end justify-center text-amber-400 pb-4 text-sm transition-all duration-500 hover:text-base hover:text-amber-300" 
              onClick={() => set_modalIsOpened(!modalIsOpened)}
            > 
              ver mais
            </button>
          )}
        </div>
      </div>

      <div className="m-auto lg:m-0 w-[350px] h-fit max-w-[80vw] flex-shrink-0 overflow-hidden rounded-lg" >
        <img className="object-contain transform translate-y-[-25px] rounded-lg" src={`/scenes/${image_path}.png`} />
      </div>

      {modalIsOpened &&(
        <div className="fixed z-10 w-screen h-screen bg-slate-900/50 top-0 left-0" id={'sceneBackdrop'} onClick={(event) => handleBackdrop(event)}>
          <div className="absolute w-[600px] max-w-[95vw] h-[700px] max-h-[95vh] bg-slate-700 top-[50%] left-[50%] rounded-md transform translate-x-[-50%] translate-y-[-50%] z-20 p-3 pt-10 flex flex-col items-center">
            <button className="absolute top-3 right-3 transition-all duration-300 text-lg hover:text-slate-400" onClick={() => set_modalIsOpened(!modalIsOpened)}> <genericIcons.CloseIcon /> </button>
            <div className="overflow-y-scroll relative px-2">
              <h5 className="pr-2 text-center font-semibold text-lg text-amber-400">{title}</h5>
              <CompDivisor />
              <div className="w-[350px] h-[300px] flex-shrink-0 overflow-hidden rounded-lg border border-slate-700 mt-4 mx-auto" >
                <img className="object-contain transform translate-y-[-25px]" src={`/scenes/${image_path}.png`} />
              </div>

              <p className="text-start text-xs mt-4 mb-8 px-6" dangerouslySetInnerHTML={{ __html: body }}/>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ScenesContent