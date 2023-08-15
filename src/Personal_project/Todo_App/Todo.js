import React from 'react'
import { useEffect,useState } from 'react'
import './Todo.css'

function TodoApp(){
    useEffect(() => {
        document.title = 'Todo App';
    }, [])
    const [inputs, setInputs] = useState("");
    const [submits, setSubmits] = useState("");
    const Handlechange = (event) => {
        setInputs(event.target.value)
    }
    const Handlesubmit = (event) => {
        event.preventDefault()
        setSubmits(inputs)
    }
    return(
        <div className='bodytodo'>
            <section className='maintodo'>
                <h1 className='thingstodo'>THINGS TO DO</h1>
                <form className='formtodo' onSubmit={Handlesubmit}>
                    <input type='text' value={inputs} placeholder='Add new item to the todo list' className='inputbox' onChange={Handlechange}/><br/>
                    <button className='submittodo'>Submit</button>
                    <ul>
                        <li>{submits}</li>
                    </ul>
                </form>
            </section>
        </div>
    )
}

export default TodoApp