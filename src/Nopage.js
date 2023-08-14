import React, { useEffect } from 'react'
import './Css/Nopage.css'

function Nopage() {
    useEffect(() => {
        document.title = '404';
    }, []);
    return(
        <div className='nomainpage'>
            <h1 className='nopage'>404 | Page Not Found</h1>
            <p className='nop'>Could not find what you were looking for.</p>
        </div>
    )
}

export default Nopage