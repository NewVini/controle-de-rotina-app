/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import './index.scss'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';



export const RoutinePage = () => {

    const [taskTitle, setTaskTitle] = useState<string>('Caminhada')

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1> Olá, Esta é sua rotina ! </h1>
                        <h2>Bem-vindo a sua carteira digital ! ;) </h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 border-title">
                        <h1 className='row-h1'> Missões diárias</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 ">
                        <TextField
                            name="Description"
                            label="Cadastrar tarefa"
                            placeholder="Description"
                            autoComplete="off"
                            variant="outlined"
                            size='small'
                            style={{ 'width': '50%' }}
                        />
                        <Button className='btn-register ' variant='contained' size='small'>+</Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card-assignment default d-flex justify-content-between align-items-center">
                            <div className="assignment-title">
                                <Checkbox color="success" />
                            </div>
                            <div className="assignment-action">
                                <h1> {taskTitle} </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

