/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import './index.scss'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';



export const RoutinePage = () => {

    const [taskTitle, setTaskTitle] = useState<string>('Caminhada')
    const [age, setAge] = useState<string>('Caminhada')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


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
                    <div className="col-md-12 d-flex justify-content-between">
                        <FormGroup row={true} sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between'
                        }}>
                            <TextField
                                name="Description"
                                label="Cadastrar tarefa"
                                placeholder="Description"
                                autoComplete="off"
                                variant="outlined"
                                size='small'
                                style={{ 'width': '50%'}}
                            />
                            <FormControl sx={{width: '40%'}}>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    sx={{height: '72%'}}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <Button className='btn-register ' variant='contained' size='small'>+</Button>
                        </FormGroup>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 d-flex justify-content-between">
                        <div className='routine-colum'>
                            <div className='routine-title'>
                                <h1>Segunda</h1>
                            </div>
                            <hr></hr>
                            <div className='routine-checks d-flex align-items-center text-center'>
                                <Checkbox /> <p>Estudar</p>
                            </div>
                        </div>
                        <div className='routine-colum'>
                            <div className='routine-title'>
                                <h1>Segunda</h1>
                            </div>
                            <hr></hr>
                            <div className='routine-checks d-flex align-items-center text-center'>
                                <Checkbox /> <p>Estudar</p>
                            </div>
                        </div>
                        <div className='routine-colum'>
                            <div className='routine-title'>
                                <h1>Segunda</h1>
                            </div>
                            <hr></hr>
                            <div className='routine-checks d-flex align-items-center text-center'>
                                <Checkbox /> <p>Estudar</p>
                            </div>
                        </div>
                        <div className='routine-colum'>
                            <div className='routine-title'>
                                <h1>Segunda</h1>
                            </div>
                            <hr></hr>
                            <div className='routine-checks d-flex align-items-center text-center'>
                                <Checkbox /> <p>Estudar</p>
                            </div>
                        </div>
                        <div className='routine-colum'>
                            <div className='routine-title'>
                                <h1>Segunda</h1>
                            </div>
                            <hr></hr>
                            <div className='routine-checks d-flex align-items-center text-center'>
                                <Checkbox /> <p>Estudar</p>
                            </div>
                        </div>
                        <div className='routine-colum'>
                            <div className='routine-title'>
                                <h1>Segunda</h1>
                            </div>
                            <hr></hr>
                            <div className='routine-checks d-flex align-items-center text-center'>
                                <Checkbox /> <p>Estudar</p>
                            </div>
                        </div>
                        <div className='routine-colum'>
                            <div className='routine-title'>
                                <h1>Segunda</h1>
                            </div>
                            <hr></hr>
                            <div className='routine-checks d-flex align-items-center text-center'>
                                <Checkbox /> <p>Estudar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

