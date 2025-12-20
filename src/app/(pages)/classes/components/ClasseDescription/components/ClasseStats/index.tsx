import { TypedClasse } from '@/app/typings/classes'
import React, { useState } from 'react'

interface IProps {
  classe: TypedClasse
}

const ClasseStats = ( { classe }:IProps ) => {
  const [ startingItemsOpts, set_startingItemsOpts ] = useState<number>(0)
  const { statsSheet } = classe

  const handleStartingItemsOpts = (index: number) => {
    set_startingItemsOpts(index)
  }

  return (
    <div className="flex flex-col gap-2 border border-slate-400 bg-slate-900/80 p-1 rounded-md">
      <h2 className="text-center font-semibold text-amber-400 text-lg">Stats e Infos da classe de {classe.name}</h2>
      
      <div className="grid grid-cols-2">
        <div>
          <p className="flex gap-1 text-sm">
            <span className="font-bold" >Atributo Primário:</span>
            <span>{statsSheet.primaryAttribute}</span>
          </p>
          <div >
            <h3 className="font-bold text-amber-400 mt-2">Perícias</h3>
            <p className="flex gap-1 text-sm">
              <span className="font-bold">
                Quantidade de Perícias:
              </span>
              <span>
                {statsSheet.skillsThrowsAmount}
              </span>
            </p>
            <p className="font-bold">Lista de Perícias</p>
            <ul>
              {statsSheet?.skillsThrowsProfs?.map((item) => {
                return(
                  <li>{item}</li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3>Proficiências</h3>
            <div>
              <p>Proficiência com Armas</p>
              <ul>
                {statsSheet?.weaponyProfs?.map((item) => {
                  return(
                    <li>{item}</li>
                  )
                })} 
              </ul>
            </div>

            <div>
              <p>Proficiência com Armaduras</p>
              <ul>
                {statsSheet?.armoryProfs?.map((item) => {
                  return(
                    <li>{item}</li>
                  )
                })} 
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Equipamento</h3>

            <div>
              {statsSheet?.startingItems?.map((item, index) => {
                return(
                  <button 
                    onClick={() => handleStartingItemsOpts(index)}
                  >
                    Opção {index + 1}
                  </button>
                )
              })}
            </div>

            <ul>
              {statsSheet?.startingItems?.map((item, index) => {
                if(startingItemsOpts === index) {
                  return(
                    <li>
                      <div>
                        <p>Corporal: {item.body}</p>
                        <p>Mão Principal: {item.mainHand}</p>
                        <p>Mão Secundária: {item.offHand}</p>
                        <div>
                          <p>Extras:</p>
                          <ul>
                            {item?.extras?.map((itemExtra) => {
                              return(
                                <li>{itemExtra}</li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClasseStats