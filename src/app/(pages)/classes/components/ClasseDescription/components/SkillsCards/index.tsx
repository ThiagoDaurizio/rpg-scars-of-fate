import React from 'react'
import { genericIcons } from '@/app/assets/icons';

interface IProps {
  skill: {
    name: string;
    body: string;
    icon_path: string;
  }
  index: number
  color: string
}

const SkillsCards = ( { skill, index, color }:IProps ) => {
  return (
    <div className="flex gap-2 border border-slate-400 p-1 rounded-md">
      <div className="flex-shrink-0">
        <img className="rounded-sm" src={`/skills/${skill.icon_path}${index}.png`} />
      </div>
      <div>
        <p className="flex items-center gap-1 text-base font-medium pl-2">
          <genericIcons.MarkerIcon className="text-xs" style={{ color: color}}/>
          <span>{skill.name}</span>
        </p>
        <p className="text-xs text-slate-400">{skill.body}</p>
      </div>
    </div>
  )
}

export default SkillsCards