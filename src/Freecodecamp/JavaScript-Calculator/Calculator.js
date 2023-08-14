import React, {useEffect} from 'react'
import {useState} from 'react'
import './Calculator.css'

function Calculator(){
    useEffect(() => {
        document.title = 'Calculator';
      }, []);
      
      const [numbers, setnumbers] = useState('0')
      const handleclicknum = (input) => {
        setnumbers((prevNumber) => {
          if ((prevNumber + input).length > 21) {
            return prevNumber; // Do not update the state if the length exceeds 21
          } else {
            return prevNumber === "0" ? input : prevNumber + input;
          }
        });
      }
      const reset = () => {
        setnumbers('0')
      }
      const calculateResult = () => {
        try {
          // eslint-disable-next-line no-new-func
          const result = new Function('return ' + numbers)();
          setnumbers(result.toString());
        } catch (error) {
          setnumbers("Error");
        }
      };
    return(
        <div className='maincontainer'>
            <div className='calculator'>
                <section className='sectioncal'>
                    <p className='formulaScreen'>{calculateResult}</p>
                    <p className='outputScreen'>{numbers}</p>
                    <button className='buttoncal ac' onClick={reset}>AC</button>
                    <button className='buttoncal symbols' onClick={() => handleclicknum('/')}>/</button>
                    <button className='buttoncal symbols' onClick={() => handleclicknum('*')}>x</button>
                    <button className='buttoncal' onClick={() => handleclicknum('7')}>7</button>
                    <button className='buttoncal' onClick={() => handleclicknum('8')}>8</button>
                    <button className='buttoncal' onClick={() => handleclicknum('9')}>9</button>
                    <button className='buttoncal symbols' onClick={() => handleclicknum('-')}>-</button>
                    <button className='buttoncal' onClick={() => handleclicknum('4')}>4</button>
                    <button className='buttoncal'  onClick={() => handleclicknum('5')}>5</button>
                    <button className='buttoncal' onClick={() => handleclicknum('6')}>6</button>
                    <button className='buttoncal symbols' onClick={() => handleclicknum('+')}>+</button>
                    <button className='buttoncal' onClick={() => handleclicknum('1')}>1</button>
                    <button className='buttoncal' onClick={() => handleclicknum('2')}>2</button>
                    <button className='buttoncal' onClick={() => handleclicknum('3')}>3</button>
                    <button className='buttoncal button0' onClick={() => handleclicknum('0')}>0</button>
                    <button className='buttoncal' onClick={() => handleclicknum('.')}>.</button>
                    <button className='buttoncal buttonequal' onClick={() => calculateResult}>=</button>
                </section>
            </div>
        </div>
    )
}

export default Calculator