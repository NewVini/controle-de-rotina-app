import { Routes,Route } from 'react-router-dom'
import {HomePage} from '../UI/pages/home/index'
import {RoutinePage} from '../UI/pages/routine/index'


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={ <HomePage /> }></Route>
            <Route path='/rotina' element={ <RoutinePage /> }></Route>
        </Routes>
    )
}