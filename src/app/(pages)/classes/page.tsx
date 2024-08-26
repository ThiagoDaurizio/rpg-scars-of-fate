'use client'
import React, { useState } from 'react'
import data from '@/api/data.json'
import PortraitSlider from './components/PortraitSlider'
import ClasseDescription from './components/ClasseDescription'
import ClasseStory from './components/ClasseStory'

import { classesIcons } from '@/app/assets/icons'
import CompDivisor from '@/app/components/CompDivisor'

const index = () => {
  const [selectedClasse, set_selectedClasse] = useState(data.classesList[0])
  const [selectedInfo, set_selectedInfo] = useState<boolean>(true)



  const handleClasseCTA = (id: string) => {
    const newClasse = data.classesList.find((item) => item.id === id)

    set_selectedClasse(newClasse!)
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {data?.classesList.map((item) => {
            const IconComponent = classesIcons[item.theme.icon as keyof typeof classesIcons];

            return(
              <button key={item.id} className="flex gap-1 items-center bg-slate-700 p-1 px-2 rounded-md border border-slate-400 transition duration-300 hover:bg-slate-600" 
                onClick={() => handleClasseCTA(item.id)}>
                {IconComponent && <IconComponent style={{color: item.theme.color}}/>}
                {selectedClasse.id === item.id && (
                  <p>{item.name}</p>
                )}
              </button>
            )
          })}
        </div>

        <CompDivisor flex={'row'}/>

        <div>
          <PortraitSlider classePath={selectedClasse.theme.image_path} />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-center w-full gap-8">
          <button className="flex gap-1 items-center bg-slate-700 p-1 px-2 rounded-md border border-slate-400 transition duration-300 hover:bg-slate-600" onClick={() => set_selectedInfo(true)}>Descrição</button>
          <button className="flex gap-1 items-center bg-slate-700 p-1 px-2 rounded-md border border-slate-400 transition duration-300 hover:bg-slate-600" onClick={() => set_selectedInfo(false)}>História</button>
        </div>
        <div>
          {selectedInfo 
          ? <ClasseDescription classe={selectedClasse} />
          : <ClasseStory classe={selectedClasse} />
          }
        </div>

      </div>
    </div>
  )
}

export default index