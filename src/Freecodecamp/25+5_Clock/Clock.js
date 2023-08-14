import React, {useEffect, useState} from 'react'
import "./Clock.css"
import '@fortawesome/fontawesome-free/css/all.css'
import audioAlarm from './audio/alarm-clock-short-6402.mp3'


function Clock(){
    //Page title
    useEffect(() => {
        document.title = 'Clock';
      }, []);
    //increment, decrement and reset
    const [incre, setincre] = useState(5);
    const increment = () => {
        if (incre < 60){
            setincre(incre + 1)
            setBreak(breakstate + 60)
        }
    }
    const decrement = () => {
        if (incre > 1){
            setincre(incre - 1)
            setBreak(breakstate - 60)
        }
    }
    const [session, setsession] = useState(25);
    const sessionincrement = () => {
        if (session < 60){
            setsession(session + 1)
            setCount(count + 60)
        }
    }
    const sessiondecrement = () => {
        if (session > 1){
            setsession(session - 1)
            setCount(count - 60)
        }
    }
    //Reset everything
    const Reset = () => {
        setsession(25)
        setincre(5)
        setCount(1500)
        setText(<h1 className='countdownfont'>Session</h1>)
        setIsStarted(false)
    }
    //Countdown timer
    const [text, setText] = useState(<h1 className='countdownfont'>Session</h1>)
    const [count, setCount] = useState(1500);
    const [breakstate, setBreak] = useState(300);
    const [isStarted, setIsStarted] = useState(false);
    //audio
    const [audio] = useState(new Audio(audioAlarm));
    useEffect(() => {
        const PlayAudio = () => {
            audio.play()
        }
        // Decrease count every second
        let timer;
        if (isStarted) {
            timer = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
        }
        //When the count reaches 0
        if (count === 0) {
            clearInterval(timer);
            PlayAudio()
            setCount(breakstate);
            setText(<h1 className='countdownfont' style={{color: '#a50d0d'}}>Break</h1>)
        }
        return () => {
            clearInterval(timer);
        };
    }, [count, isStarted, breakstate, audio]);
    //Convert seconds to minutes
    const formatTime = () => {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    //Start and pause
    const startCountdown = () => {
            setIsStarted(prevState => !prevState);
    };
    const textColor = breakstate ? 'white' : 'red';
    return(
        <div className="mainclass">
            <section className='mainsec'>
                <h1 className='clock'>25 + 5 Clock</h1>
                <section className='semisec'>
                    <div className='firstdiv'>
                        <h2 className='break'>Break Length</h2>
                        <div className='icon1clock'>
                            <a href='#/'><i onClick={decrement} className="arr fa-sharp fa-solid fa-arrow-down fa-xl" style={{color: '#ffffff'}}></i></a>
                            <p className='p1'>{incre}</p>
                            <a href='#/'><i onClick={increment} className="arr2 fa-sharp fa-solid fa-arrow-up fa-xl" style={{color: '#ffffff'}}></i></a>
                    </div>
                    </div>
                    <div>
                        <h2 className='session'>Session Length</h2>
                        <div className='icon1clock'>
                            <a href='#/'><i onClick={sessiondecrement} className="arr fa-sharp fa-solid fa-arrow-down fa-xl" style={{color: '#ffffff'}}></i></a>
                            <p className='p1'>{session}</p>
                            <a href='#/'><i onClick={sessionincrement} className="arr2 fa-sharp fa-solid fa-arrow-up fa-xl" style={{color: '#ffffff'}}></i></a>
                        </div>
                    </div>
                </section>
                <div className='countdown'>
                    <h1 className='countdownfont'>{text}</h1>
                    <h1 className='countdownnum' style={{color: textColor}}>{formatTime()}</h1>
                </div>
                <div className='playpause'>
                    <a href='#/'><i onClick={startCountdown} className="fa-solid fa-play fa-2xl" style={{color: '#ffffff'}}></i><i onClick={startCountdown} className="fa-solid fa-pause fa-2xl" style={{color: '#ffffff'}}></i></a>
                    <a href='#/'><i onClick={Reset} className="rotate fa-solid fa-rotate fa-2xl" style={{color: '#ffffff'}}></i></a>
                </div>
            </section>
        </div>
    )
}
export default Clock