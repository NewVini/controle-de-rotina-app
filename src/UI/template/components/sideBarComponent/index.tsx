import './index.scss'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'


export const SideBarComponent = (props: any) => {

    return (
        <>
            <div className={props.openClose !== false ? 'sidebar-content' : 'sidebar-content-closed'}>
                <div className='sidebar-wraper'>
                    <div className='close'>
                        <CloseIcon onClick={() => props.setOpenClose(false)} />
                    </div>
                    <div className='logo'>
                        {/* <SentimentVerySatisfiedIcon /> */}
                    </div>
                    <div className='list-menu-icons'>
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/rotina">
                                    Rotina
                                </Link>
                            </li>
                            <li>
                                <a>Reservas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}