import React from 'react'
import './Components_css/Footer.css'
import logo from '../images/whitelogo_adobe_express.svg'
import '@fortawesome/fontawesome-free/css/all.css'

function Footer() {
    return(
        <div>
            <footer className='footer'>
                <section className='sectionlogo'>
                    <img src={logo} alt='logo' width={200} height={200}/>
                </section>
                <p className='txt'>Never back down, Never give up and always looking to achieve my goals</p>
                <section className='footericon'>
                    <a href='/'><i className="fa-brands fa-square-twitter fa-2xl" style={{color: '#ffffff'}}></i></a>
                    <a href='/'><i className="fa-brands fa-whatsapp fa-2xl" style={{color: '#ffffff'}}></i></a>
                    <a href='/'><i class="fa-brands fa-linkedin fa-2xl" style={{color: '#ffffff'}}></i></a>
                </section>
            </footer>
            <footer className='copyright'>
                <p>© 2023 Made by Daniel Odozi. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Footer