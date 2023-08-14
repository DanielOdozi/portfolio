import React, { useState } from 'react';
import {useEffect} from 'react';
import "./Drummachine.css";
import '@fortawesome/fontawesome-free/css/all.css';
import audioFIle from './audio/Heater-1.mp3'
import buttonSound from './audio/Heater-2.mp3'
import buttonSound2 from './audio/Heater-3.mp3'
import buttonSound3 from './audio/Heater-4.mp3'
import buttonSound4 from './audio/Clap.mp3'
import buttonSound5 from './audio/Open_HH.mp3'
import buttonSound6 from './audio/Kick_n_Hat.mp3'
import buttonSound7 from './audio/RP4_KICK_1.mp3'
import buttonSound8 from './audio/Closed-HH.mp3'

function Drummachine(){
    useEffect(() => {
        document.title = 'Drum-Machine';
      }, []);
      //button Sound and Key press
      const [audios] = useState(new Audio(audioFIle));
      const [audios2] = useState(new Audio(buttonSound));
      const [audios3] = useState(new Audio(buttonSound2));
      const [audios4] = useState(new Audio(buttonSound3));
      const [audios5] = useState(new Audio(buttonSound4));
      const [audios6] = useState(new Audio(buttonSound5));
      const [audios7] = useState(new Audio(buttonSound6));
      const [audios8] = useState(new Audio(buttonSound7));
      const [audios9] = useState(new Audio(buttonSound8));
      const [isButtonActive, setIsButtonActive] = useState(false);
      const playAudio = () => {
        audios.play();
        audios.playbackRate = 1
      };
      useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'q') {
            playAudio();
          }
        };
        const handleKeyUp = (event) => {
          if (event.key === 'q') {
            setIsButtonActive(false);
            handleClickButton1()
            setbuttonname('Heater 1')
          }
        };
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
          window.removeEventListener('keyup', handleKeyUp);
        };
      });
      const playAudio2 = () => {
        audios2.play();
      };
      useEffect(() => {
        const handleKeyPress2 = (event) => {
          if (event.key === 'w') {
            playAudio2();
          }
        };
        const handleKeyUp2 = (event) => {
          if (event.key === 'w') {
            setIsButtonActive(false);
            handleClickButton2()
            setbuttonname('Heater 2')
          }
        };
        window.addEventListener('keydown', handleKeyPress2);
        window.addEventListener('keyup', handleKeyUp2);
        return () => {
          window.removeEventListener('keydown', handleKeyPress2);
          window.removeEventListener('keyup', handleKeyUp2);
        };
      });
      const playAudio3 = () => {
        audios3.play();
      };
      useEffect(() => {
        const handleKeyPress3 = (event) => {
          if (event.key === 'e') {
            playAudio3();
          }
        };
        const handleKeyUp3 = (event) => {
          if (event.key === 'e') {
            setIsButtonActive(false);
            handleClickButton3()
            setbuttonname('Heater 3')
          }
        };
        window.addEventListener('keydown', handleKeyPress3);
        window.addEventListener('keyup', handleKeyUp3);
        return () => {
          window.removeEventListener('keydown', handleKeyPress3);
          window.removeEventListener('keyup', handleKeyUp3);
        };
      });
      const playAudio4 = () => {
        audios4.play();
      };
      useEffect(() => {
        const handleKeyPress4 = (event) => {
          if (event.key === 'a') {
            playAudio4();
          }
        };
        const handleKeyUp4 = (event) => {
          if (event.key === 'a') {
            setIsButtonActive(false);
            handleClickButton4()
            setbuttonname('Heater 4')
          }
        };
        window.addEventListener('keydown', handleKeyPress4);
        window.addEventListener('keyup', handleKeyUp4);
        return () => {
          window.removeEventListener('keydown', handleKeyPress4);
          window.removeEventListener('keyup', handleKeyUp4);
        };
      });
      const playAudio5 = () => {
        audios5.play();
      };
      useEffect(() => {
        const handleKeyPress5 = (event) => {
          if (event.key === 's') {
            playAudio5();
          }
        };
        const handleKeyUp5 = (event) => {
          if (event.key === 's') {
            setIsButtonActive(false);
            handleClickButton5()
            setbuttonname('Clap')
          }
        };
        window.addEventListener('keydown', handleKeyPress5);
        window.addEventListener('keyup', handleKeyUp5);
        return () => {
          window.removeEventListener('keydown', handleKeyPress5);
          window.removeEventListener('keyup', handleKeyUp5);
        };
      });
      const playAudio6 = () => {
        audios6.play();
      };
      useEffect(() => {
        const handleKeyPress6 = (event) => {
          if (event.key === 'd') {
            playAudio6();
          }
        };
        const handleKeyUp6 = (event) => {
          if (event.key === 'd') {
            setIsButtonActive(false);
            handleClickButton6()
            setbuttonname('Open HH')
          }
        };
        window.addEventListener('keydown', handleKeyPress6);
        window.addEventListener('keyup', handleKeyUp6);
        return () => {
          window.removeEventListener('keydown', handleKeyPress6);
          window.removeEventListener('keyup', handleKeyUp6);
        };
      });
      const playAudio7 = () => {
        audios7.play();
      };
      useEffect(() => {
        const handleKeyPress7 = (event) => {
          if (event.key === 'z') {
            playAudio7();
          }
        };
        const handleKeyUp7 = (event) => {
          if (event.key === 'z') {
            setIsButtonActive(false);
            handleClickButton7()
            setbuttonname("Kick n' Hat")
          }
        };
        window.addEventListener('keydown', handleKeyPress7);
        window.addEventListener('keyup', handleKeyUp7);
        return () => {
          window.removeEventListener('keydown', handleKeyPress7);
          window.removeEventListener('keyup', handleKeyUp7);
        };
      });
      const playAudio8 = () => {
        audios8.play();
      };
      useEffect(() => {
        const handleKeyPress8 = (event) => {
          if (event.key === 'x') {
            playAudio8();
          }
        };
        const handleKeyUp8 = (event) => {
          if (event.key === 'x') {
            setIsButtonActive(false);
            handleClickButton8()
            setbuttonname('Kick')
          }
        };
        window.addEventListener('keydown', handleKeyPress8);
        window.addEventListener('keyup', handleKeyUp8);
        return () => {
          window.removeEventListener('keydown', handleKeyPress8);
          window.removeEventListener('keyup', handleKeyUp8);
        };
      });
      const playAudio9 = () => {
        audios9.play();
      };
      useEffect(() => {
        const handleKeyPress9 = (event) => {
          if (event.key === 'c') {
            playAudio9();
          }
        };
        const handleKeyUp9 = (event) => {
          if (event.key === 'c') {
            setIsButtonActive(false);
            handleClickButton9()
            setbuttonname('Closed HH')
          }
        };
        window.addEventListener('keydown', handleKeyPress9);
        window.addEventListener('keyup', handleKeyUp9);
        return () => {
          window.removeEventListener('keydown', handleKeyPress9);
          window.removeEventListener('keyup', handleKeyUp9);
        };
      });

      //button Names Heater
      const [buttonname, setbuttonname] = useState("Heater Kit");
      const click = (id) => {
        if (id === 'key1'){
            setbuttonname('Heater 1')
            handleClickButton1();
            playAudio();
        }else if (id === 'key2') {
            setbuttonname('Heater 2')
            handleClickButton2();
            playAudio2();
        }else if (id === 'key3') {
            setbuttonname('Heater 3')
            handleClickButton3();
            playAudio3();
        }else if (id === 'key4') {
            setbuttonname('Heater 4')
            handleClickButton4();
            playAudio4();
        }else if (id === 'key5') {
            setbuttonname('Clap')
            handleClickButton5();
            playAudio5();
        }else if (id === 'key6') {
            setbuttonname('Open HH')
            handleClickButton6();
            playAudio6();
        }else if (id === 'key7') {
            setbuttonname("Kick n' Hat")
            handleClickButton7();
            playAudio7();
        }else if (id === 'key8') {
            setbuttonname('Kick')
            handleClickButton8();
            playAudio8();
        }else if (id === 'key9') {
            setbuttonname('Closed HH')
            handleClickButton9();
            playAudio9();
        }
      }

      //button colors
      const [button1Clicked, setButton1Clicked] = useState(false);
      const [button2Clicked, setButton2Clicked] = useState(false);
      const [button3Clicked, setButton3Clicked] = useState(false);
      const [button4Clicked, setButton4Clicked] = useState(false);
      const [button5Clicked, setButton5Clicked] = useState(false);
      const [button6Clicked, setButton6Clicked] = useState(false);
      const [button7Clicked, setButton7Clicked] = useState(false);
      const [button8Clicked, setButton8Clicked] = useState(false);
      const [button9Clicked, setButton9Clicked] = useState(false);
      const handleClickButton1 = () => {
        setButton1Clicked(true);
        setTimeout(() => {
          setButton1Clicked(false);
        }, 200);
      };
      const handleClickButton2 = () => {
        setButton2Clicked(true);
        setTimeout(() => {
          setButton2Clicked(false);
        }, 200);
      };
      const handleClickButton3 = () => {
        setButton3Clicked(true);
        setTimeout(() => {
          setButton3Clicked(false);
        }, 200);
      };
      const handleClickButton4 = () => {
        setButton4Clicked(true);
        setTimeout(() => {
          setButton4Clicked(false);
        }, 200);
      };
      const handleClickButton5 = () => {
        setButton5Clicked(true);
        setTimeout(() => {
          setButton5Clicked(false);
        }, 200);
      };
      const handleClickButton6 = () => {
        setButton6Clicked(true);
        setTimeout(() => {
          setButton6Clicked(false);
        }, 200);
      };
      const handleClickButton7 = () => {
        setButton7Clicked(true);
        setTimeout(() => {
          setButton7Clicked(false);
        }, 200);
      };
      const handleClickButton8 = () => {
        setButton8Clicked(true);
        setTimeout(() => {
          setButton8Clicked(false);
        }, 200);
      };
      const handleClickButton9 = () => {
        setButton9Clicked(true);
        setTimeout(() => {
          setButton9Clicked(false);
        }, 200);
      };


      //jsx
    return(
        <div className="drummachine">
            <section className='sections'>
                <div className='buttons'>
                    <div className='container1'>
                        <button  className={`button-key ${button1Clicked ? "clicked1" : ""}  ${isButtonActive ? 'active' : ''}`} onClick={() => click("key1")} id='key1'>Q</button>
                        <button className={`button-key ${button2Clicked ? "clicked2" : "" }`} onClick={() => click("key2")} id='key2'>W</button>
                        <button className={`button-key ${button3Clicked ? "clicked3" : "" }`} onClick={() => click("key3")} id='key3'>E</button>
                    </div>
                    <div className='container2'>
                        <button className={`button-key ${button4Clicked ? "clicked4" : "" }`} onClick={() => click("key4")} id='key4'>A</button>
                        <button className={`button-key ${button5Clicked ? "clicked5" : "" }`} onClick={() => click("key5")} id='key5'>S</button>
                        <button className={`button-key ${button6Clicked ? "clicked6" : "" }`} onClick={() => click("key6")} id='key6'>D</button>
                    </div>
                    <div className='container3'>
                        <button className={`button-key ${button7Clicked ? "clicked7" : "" }`} onClick={() => click("key7")} id='key7'>Z</button>
                        <button className={`button-key ${button8Clicked ? "clicked8" : "" }`} onClick={() => click("key8")} id='key8'>X</button>
                        <button className={`button-key ${button9Clicked ? "clicked9" : "" }`} onClick={() => click("key9")} id='key9'>C</button>
                    </div>
                </div>
                <div className='powerbutton'>
                    <p className='powertxt'>Power</p>
                    <div className="power"><i className="fa-sharp fa-solid fa-square fa-xl icon" style={{color: '#00d5ff'}}></i></div>
                </div>
                <div className="rightside">
                  <p className='rightside1'>{buttonname}</p>
                </div>
                <div className='powerbutton2'>
                    <p className='powertxt2'>Bank</p>
                    <div className="power2"><i className="fa-sharp fa-solid fa-square fa-xl icon2" style={{color: '#00d5ff'}}></i></div>
                </div>
            </section>
        </div>
    )
}

export default Drummachine