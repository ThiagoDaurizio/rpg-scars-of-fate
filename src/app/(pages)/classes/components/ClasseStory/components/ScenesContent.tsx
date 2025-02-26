'use client'
import CompDivisor from "@/app/components/CompDivisor"
import React, { useState } from "react"

import { genericIcons } from "@/app/assets/icons"
import { TypedCast } from "@/app/typings/classes"

interface IProps {
  image_path: string
  title: string
  body: string
  casts: TypedCast[]
  position: "right" | "left"
}

const ScenesContent = ( { image_path, title, body, casts, position }:IProps ) => {
  const [modalIsOpened, set_modalIsOpened] = useState<boolean>(false)
  const [castingIsOpened, set_castingIsOpened] = useState<boolean>(false)

  const handleBackdrop = (event: any) => {
    if(event.target.id === 'sceneBackdrop') {
      set_modalIsOpened(false)
      set_castingIsOpened(false)
      bodyScroll(false)
    }
  }

  const handleModalControl = (order: boolean) => {
    if(order) {
      set_modalIsOpened(true)
      set_castingIsOpened(false)
      bodyScroll(order)

      return
    } else {
      set_modalIsOpened(false)
      set_castingIsOpened(false)
      bodyScroll(order)

      return
    }
  }

  const bodyScroll = (order: boolean) => {
    const body = document.querySelector('body')

    if(order) {
      body!.style.overflowY = 'hidden'
    } else {
      body!.style.overflowY = 'auto'
    }
  }

  return (
    <div className={`flex flex-col-reverse min-h-[350px] ${position === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-4 ${position === 'right' ? 'justify-end' : 'justify-start'}`}>
      <div className="flex flex-col items-end w-full">
        <h5 className="text-center lg:text-end pr-2 w-full font-semibold text-lg text-amber-400">{title}</h5>
        <CompDivisor />
        <div className="max-h-[280px] w-full h-full overflow-y-hidden relative p-2">
          <p className="text-start text-xs mt-2" dangerouslySetInnerHTML={{ __html: body }}/>
          {body &&(
            <button 
              className="absolute bottom-0 left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-[rgba(2,2,2,0.5)] to-[rgba(255,255,255,0)] w-full rounded-lg h-full flex items-end justify-center text-amber-400 pb-4 text-sm transition-all duration-500 hover:text-base hover:text-amber-300" 
              onClick={(event) => handleModalControl(true)}
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
          <div className="absolute w-[600px] max-w-[95vw] h-[700px] max-h-[95vh] bg-slate-700 drop-shadow-[0_0_100px_rgb(0,0,0)] top-[50%] left-[50%] rounded-md transform translate-x-[-50%] translate-y-[-50%] z-20 p-3 pt-10 flex flex-col items-center">
            <button className="absolute top-3 right-3 transition-all duration-300 text-lg hover:text-slate-400" onClick={(event) => handleModalControl(false)}> <genericIcons.CloseIcon /> </button>
            <div className="overflow-y-scroll w-full relative px-2">
              <h5 className="pr-2 text-center font-semibold text-lg text-amber-400">{title}</h5>
              <CompDivisor />
              <div className="w-[350px] h-[300px] max-w-full flex flex-shrink-0 overflow-hidden rounded-lg border border-slate-700 mt-4 mx-auto" >
                <img className="object-cover w-full transform translate-x-0" src={`/scenes/${image_path}.png`} />
              </div>

              {casts?.length ?
                <div>
                  <p className="mt-2 text-center text-amber-400 font-semibold cursor-pointer transition-all duration-300  hover:underline hover:text-amber-500"
                    onClick={() => set_castingIsOpened(!castingIsOpened)}
                  >
                    Elenco
                  </p>
                  {castingIsOpened &&(
                    <div className="flex gap-4 w-[90%] m-auto overflow-x-scroll bg-slate-800/30 p-2 px-4 rounded-md">
                      {casts.map((item) => {
                        return(
                          <div className="shrink-0 flex flex-col items-center group w-32">
                            <img className="w-32 rounded-lg border border-slate-800 transition-all duration-300 group-hover:scale-105"
                              src={`/scenes/casts/${item.pre_path}/${item.image_path}.png`}
                            />
                            <p className="text-sm mt-1 transition-all duration-300 group-hover:text-amber-400">{item.name}</p>
                            <p className="text-xs text-slate-400">{item.subname}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                :
                null
              }

              <p className="text-start text-xs mt-4 mb-8 px-6" dangerouslySetInnerHTML={{ __html: body }}/>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ScenesContent