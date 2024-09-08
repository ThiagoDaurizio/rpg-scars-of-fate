import { TypedClasse } from '@/app/typings/classes'
import React from 'react'
import SkillsCards from './components/SkillsCards'
import { getClasseIcon } from '@/app/utils/getClasseIcon'

interface IProps {
  classe: TypedClasse
}

const ClasseDescription = ( { classe }:IProps ) => {

  const IconComponent = getClasseIcon(classe.id)

  return (
    <div>
      <div>
        <h4 className="text-lg font-semibold flex gap-1 items-center mt-4">
          {IconComponent && <IconComponent style={{color: classe.theme.color}} className="text-xl" />}
          {classe.name}
        </h4>
        <h6 className="text-sm text-slate-400">{classe.subtitle}</h6>
        <p className="text-xs mt-2">{classe.description}</p>
      </div>

      <div>
        <ul>
          {classe.roles.map((item) => {
            return(
              <li key={item}>{item}</li>
            )
          })}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classe.skills.map((item, index) => {
          return(
            <SkillsCards key={item.name} skill={item} index={index} color={classe.theme.color}/>
          )
        })}
      </div>
    </div>
  )
}

export default ClasseDescription