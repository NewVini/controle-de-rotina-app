/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import './index.scss'
import Button from '@mui/material/Button';
import axios from 'axios'
import { CardDTO } from '../../../types/cards-model';
import Chart from "react-apexcharts";


export const HomePage = () => {

    const [nomeUsuario, setNomeUsuario] = useState<string>("Vinicius")
    const [bankBalance, setBankBalance] = useState<number>(1.245)
    const [cardsArr, setCardsArr] = useState<CardDTO[]>([])


    const getBankCards = () => {
        axios.get<CardDTO[]>('http://localhost:8080/cards').then(res => {
            return setCardsArr(res['data'])
        }).catch(err => {

        })
    }

    useEffect(() => {
        getBankCards()
        console.log(JSON.stringify(cardsArr))
    }, [])

    const chartData = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1> Olá, {nomeUsuario} ! </h1>
                        <h2>Bem-vindo a sua carteira digital ! ;) </h2>
                        {/* <div className='line-motion'></div> */}
                    </div>
                    <div className='col-md-6'>
                        <div className='utils-row '>
                            <div className='utils-items'>
                                <h1>Total de bancos cadastrados</h1>
                                <h2> {cardsArr.length} </h2>
                            </div>
                            <div className='utils-items'>
                                <h1>Cadastrar novo banco</h1>
                                <Button variant="contained" color="primary">+</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    {cardsArr.length !== 0
                        ?
                        cardsArr.map((card) => {
                            return <>
                                <div className='col-md-3'>
                                    <div className={`card-bank ${card.cardIdentify}`}>
                                        <h1> {card.cardName} </h1>
                                        <h2>Saldo: R$ {card.balance} </h2>
                                    </div>
                                </div>
                            </>
                        })
                        :
                        <>
                            <h1>lau</h1>
                        </>
                    }
                </div>
                <div className='row mt-5'>
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="area"
                        width="100%"
                    />
                </div>
            </div>
        </>
    )
}

