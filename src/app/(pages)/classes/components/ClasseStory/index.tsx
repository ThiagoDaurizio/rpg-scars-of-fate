'use client'
import { TypedClasse } from '@/app/typings/classes'
import React, { ReactNode } from 'react'
import ScenesImageWrapper from './components/ScenesImageWrapper'
import CompDivisor from '@/app/components/CompDivisor'
import { getClasseIcon } from '@/app/utils/getClasseIcon' 

interface IProps {
  classe: TypedClasse
}

const ClasseStory = ( { classe }:IProps ) => {

  const IconComponent = getClasseIcon(classe.id)

  return (
    <div className="h-full">
      <h4 className="font-semibold flex gap-1 items-center">
        {IconComponent && <IconComponent style={{color: classe.theme.color}} className="text-xl" />}
        {classe.story.title}
      </h4>
      <h6 className="text-sm text-slate-400">{classe.story.subtitle}</h6>
      <p className="text-xs mt-2" dangerouslySetInnerHTML={{ __html: classe.story.body}}/>

      
      
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex justify-end gap-4">
          <div className="flex flex-col items-end w-full">
            <h5 className="pr-2 text-end font-semibold text-lg text-amber-400">{classe.story.scenes.photo1.title}</h5>
            <CompDivisor flex={'row'} />
            <p className="text-start text-xs mt-2" dangerouslySetInnerHTML={{ __html: classe.story.scenes.photo1.body }}/>
          </div>
          <ScenesImageWrapper image_path={classe.story.scenes.photo1.image_path} />
        </div>

        <div className="flex justify-start gap-4 w-full">
          <ScenesImageWrapper image_path={classe.story.scenes.photo2.image_path} />
          <div className="flex flex-col items-start w-full">
            <h5 className="pl-2 text-start font-semibold text-lg text-amber-400">{classe.story.scenes.photo2.title}</h5>
            <CompDivisor flex={'row'} />
            <p className="text-start text-xs mt-2" dangerouslySetInnerHTML={{ __html: classe.story.scenes.photo2.body }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClasseStory