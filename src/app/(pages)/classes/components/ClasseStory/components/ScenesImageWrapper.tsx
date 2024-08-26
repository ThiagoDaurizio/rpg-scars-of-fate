import React from 'react'

interface IProps {
  image_path: string
}


const ScenesImageWrapper = ( {image_path}:IProps ) => {
  return (
    <div className="w-[350px] h-[300px] flex-shrink-0 overflow-hidden rounded-lg border border-slate-700" >
      <img className="object-contain transform translate-y-[-25px]" src={`/scenes/${image_path}.png`} />
    </div>
  )
}

export default ScenesImageWrapper