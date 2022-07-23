/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import './index.scss'
import { daysWeekMock } from '../../../utils/daysWeekMock'
export const RoutinePage = () => {
    const [arrayDaysWeek] = useState(daysWeekMock)

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1> Olá, Esta é sua rotina ! </h1>
                        <h2>Bem-vindo a sua carteira digital ! ;) </h2>
                    </div>
                    <div className="col-md-12 border-title">
                        <h1 className='row-h1'> Missões diárias</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <form >
                        <input placeholder='Insira uma missão' type="text" />
                        <select name="" id="">
                            {
                                <>
                                    <option value="" selected disabled hidden >Dia da semana</option>
                                    {arrayDaysWeek.map( (daysObj,i) => {
                                      return <option key={i} value={daysObj.id}> {daysObj.name} </option>
                                    })}
                                </>
                            }
                        </select>
                        <button type='submit'>Cadastrar</button>
                    </form>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 d-flex justify-content-between">
                            <div className='day-container'>
                                <div className="day-title">
                                    <h1>Segunda</h1>
                                </div>
                                <div className="day-tasks">
                                    <input type="checkbox" name="" id=""  />
                                    <label>Estudar</label>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
