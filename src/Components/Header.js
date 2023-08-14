import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import logo from '../images/whitelogo.png'

function Header() {
    return(
        <div>
            <header className="header2">
                <Link to="/">
                    <img src={logo} alt="Logo" className='logo2'/>
                </Link>
                <Outlet/>
            </header>
        </div>
    )
}

export default Header