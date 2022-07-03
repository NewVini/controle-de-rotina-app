import './index.scss'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { SideBarComponent } from '../sideBarComponent';
import { useState, useEffect } from 'react';

export const NavBarComponent = () => {
    const [openClose, setOpenClose] = useState<boolean>(false)



    return (
        <>
            <SideBarComponent setOpenClose={setOpenClose} openClose={openClose} />
            <nav>
                <div className='icons-wraper'>
                    <div className='menu-icon' >
                        <MenuIcon onClick={()=>setOpenClose(true)}/>
                    </div>
                    <div className='logout-icon'>
                        <LogoutIcon />
                    </div>
                </div>
            </nav>
        </>
    )
}

