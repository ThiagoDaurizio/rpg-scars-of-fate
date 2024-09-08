'use client'
import { TypedClasse } from '@/app/typings/classes'
import React, { ReactNode } from 'react'
import ScenesImageWrapper from './components/ScenesContent'
import CompDivisor from '@/app/components/CompDivisor'
import { getClasseIcon } from '@/app/utils/getClasseIcon' 
import ScenesContent from './components/ScenesContent'

interface IProps {
  classe: TypedClasse
}

const ClasseStory = ( { classe }:IProps ) => {

  const IconComponent = getClasseIcon(classe.id)

  return (
    <div className="h-full">
      <h4 className="font-semibold flex gap-1 items-center mt-4">
        {IconComponent && <IconComponent style={{color: classe.theme.color}} className="text-xl" />}
        {classe.story.title}
      </h4>
      <h6 className="text-sm text-slate-400">{classe.story.subtitle}</h6>
      <p className="text-xs mt-2" dangerouslySetInnerHTML={{ __html: classe.story.body}}/>

      
      
      <div className="flex flex-col gap-4 mt-10">
          <ScenesContent 
            title={classe.story.scenes.photo1.title}
            body={classe.story.scenes.photo1.body}
            image_path={classe.story.scenes.photo1.image_path}
            position={'right'}
          />
          
        <ScenesContent 
          title={classe.story.scenes.photo2.title}
          body={classe.story.scenes.photo2.body}
          image_path={classe.story.scenes.photo2.image_path}
          position={'left'}
        />
      </div>
    </div>
  )
}

export default ClasseStory