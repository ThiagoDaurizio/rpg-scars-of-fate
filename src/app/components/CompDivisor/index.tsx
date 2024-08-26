import React from 'react'

interface IProps {
  flex: 'col' | 'row'

}

const CompDivisor = ( {flex}:IProps ) => {
  return (
    <span 
      className={`block rounded-lg bg-slate-400/40 w-full h-[1px]`}
    />
  )
}

export default CompDivisor