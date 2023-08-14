import React from 'react'
import { useEffect } from 'react';
import './Css/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons'
import {Outlet, Link} from 'react-router-dom'
import avatar from './images/Avatarmake.svg';
import logo from './images/logosmallbg.png'
import Footer from './Components/Footer';
import Flexbox from './Components/Flexbox'


function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio';
    }, []);
    return(
        <div>
            <header className='header'>
                <Link to="/">
                    <img src={logo} alt="Logo" className='logo'/>
                </Link>
                <Link to="/Contact" target={'_blank'}>
                    <nav className='navs'>
                        <h1 className='contacthead'>Contact</h1>
                    </nav>
                </Link>
            </header>
            <section className='intro'>
                <h1 className='front'>Frontend Developer and Wordpress Expert</h1>
                <p className='mastering'>Mastering the art of front-end wizardry and the power of WordPress magic!</p>
                <div className='avatar'><img src={avatar} alt="My Img" width={180} height={180}/></div>
            </section>
            <section className='aboutdaniel'>
                <h1 className='dan'>Hi, i am Daniel. Nice to meet you</h1>
                <p className='dan2'>
                    I am skilled in the art of front-end magic and the world of WordPress wonders. 
                    With a keen eye for design and a passion for creating seamless user experiences, 
                    I craft captivating websites that leave visitors spellbound. From elegant code structures to captivating visual elements, 
                    I bring life to digital landscapes like no other. Whether it's building responsive layouts, optimizing performance, 
                    or customizing WordPress themes, I have the expertise to turn ideas into stunning realities. A true maestro of code and creativity, 
                    I am always on the quest to push the boundaries of what's possible in the web development realm. With dedication and innovation.
                </p>
            </section>
            <section className='flexbox'>
                <div className='flex'>
                    <FontAwesomeIcon icon={faCode} size="2x" className='icon'/>
                    <h1 className='frontend'>Frontend Developer</h1>
                    <p>Coding things from scratch can be really fun.</p>
                    <p className='languages'>Languages I Know:</p>
                    <p className='langaagetools'>HTML, CSS, JAVASCRIPT, GIT, JQUERY, BOOTSTRAP</p>
                    <p className='devtools'>DEV TOOLS:</p>
                    <p className='tools'>
                        GITHUB<br/>
                        React Developer Tools<br/>
                        Visual Studio<br/>
                        Font awesome<br/>
                        Terminal
                    </p>
                </div>
                <div className='flex2'>
                    <FontAwesomeIcon icon={faWordpressSimple} size="3x" className='icon'/>
                    <h1 className='frontend'>Wordpress Developer</h1>
                    <p>Building beutiful sites from wordpress can be really fun and efficient.</p>
                    <p className='devtools'>DEV TOOLS:</p>
                    <p className='tools'>
                        GITHUB<br/>
                        React Developer Tools<br/>
                        Visual Studio<br/>
                        Font awesome<br/>
                        Terminal
                    </p>
                </div>
            </section>
            <section className='projects'>
                <h1 className='projectheading'>My Projects</h1>
                <p>Here are a few of my projects</p>
                <h1 className='freecodecamptext'>FreeCodeCamp Projects</h1>
                <div className='flex3'>
                    <Link to="/Quote" target={'_blank'}><div className='freecodecamp quote'><h1 className='hover-quote'>Random Quote Machine</h1></div></Link> 
                    <Link to="/Clock" target={'_blank'}><div className='freecodecamp clockss'><h1 className='hover-quote'>25 + 5 Clock</h1></div></Link> 
                </div>
                <div className='flex4'>
                    <Link to="/Markdown" target={'_blank'}><div className='freecodecamp markdownss'><h1 className='hover-quote'>Markdown</h1></div></Link> 
                    <Link to="/Drummachine" target={'_blank'}><div className='freecodecamp drumss'><h1 className='hover-quote'>Drum Machine</h1></div></Link>
                </div>
                <div className='flex4'>
                    <Link to="/Calculator" target={'_blank'}><div className='freecodecamp calculatorss'><h1 className='hover-quote'>Calculator</h1></div></Link>
                </div>
            </section>
            <section className='projects'>
                <h1 className='wordpress'>WordPress Projects</h1>
                <div className='flex5'>
                    <div className='freecodecamp milan'></div>
                    <div className='freecodecamp skyfortwaves'><a href='https://skyfortwaveslimited.online' target='blank' className='hover-quote'><button>Click Here</button></a></div>
                    <Link to="/Mainproducts" target={'_blank'}><div className='freecodecamp skyfortwaves'></div></Link>
                    <Flexbox />
                </div>
                <Outlet />
            </section>
            <section className='sap'>
                <div className='startaproject'></div>
            </section>
            <Footer />
        </div>
    )
}

export default Portfolio