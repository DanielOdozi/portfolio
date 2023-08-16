import React from 'react'
import { useEffect,useState } from 'react'
import './Todo.css'

function TodoApp(){
    useEffect(() => {
        document.title = 'Todo App';
    }, [])
    const [inputs, setInputs] = useState("");
    const [submits, setSubmits] = useState([]);

    useEffect(() => {
        const storedSubmits = JSON.parse(localStorage.getItem('todoList'));
        if (storedSubmits) {
            setSubmits(storedSubmits);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(submits));
    }, [submits]);

    const Handlechange = (event) => {
        setInputs(event.target.value)
    }
    const Handlesubmit = (event) => {
        event.preventDefault();
        if (inputs.trim() !== "") {
            setSubmits([...submits, inputs]);
            setInputs("");
        }
    }
    return(
        <div className='bodytodo'>
            <section className='maintodo'>
                <h1 className='thingstodo'>THINGS TO DO</h1>
                <form className='formtodo' onSubmit={Handlesubmit}>
                    <input type='text' value={inputs} placeholder='Add new item to the todo list' className='inputbox' onChange={Handlechange}/><br/>
                    <button className='submittodo'>Submit</button>
                    <div className='submitinput'>
                        {submits.map((submit, index) => (
                            <div key={index}>
                                <input type="checkbox" className='checkboxtodo'/>
                                <label>{submit}</label>
                            </div>
                        ))}
                    </div>
                </form>
            </section>
        </div>
    )
}

export default TodoApp