'use client'
import React, { useState } from 'react'
import data from '@/api/data.json'
import CompDivisor from '@/app/components/CompDivisor'

const page = () => {
  const [selectedDiety, set_selectedDiety] = useState(data.dietiesList[0])

  return (
    <div>
      <h2 className="text-amber-500 font-bold text-3xl text-center">
        DIVINDADES
      </h2>

      <CompDivisor />

      <div className="flex gap-4 justify-center mt-4">
        {data?.dietiesList?.map((item) => {
          return(
            <button 
              key={item.id}
              className={`w-20 text-center bg-slate-${item.id === selectedDiety.id ? '700' : '400'} text-amber-${item.id === selectedDiety.id ? '400' : '200'} p-1 px-2 rounded-md border border-slate-400 transition duration-300 hover:bg-slate-600`}
              onClick={() => set_selectedDiety(item)}
            >
              {item.name}
            </button>
          )
        })}
      </div>

      <div className="flex flex-col">
        <p className="text-amber-500 text-lg font-bold text-center my-4 w-[300px] mx-auto">
          {selectedDiety.name}, {selectedDiety.title}
          <CompDivisor />
        </p>


        <div className="flex gap-4">
          <div className="flex h-[450px] w-[350px] overflow-y-hidden rounded-md">
            <img
              className="object-cover transform translate-y-[-25px]"
              src={`/dieties/${selectedDiety.id}.png`} 
            />
          </div>

          <div>
            <p>Alinhamento: </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page