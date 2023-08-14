import React from 'react'
import { useEffect } from 'react'

function TodoApp(){
    useEffect(() => {
        document.title = 'Todo App';
    }, [])
    return(
        <div></div>
    )
}

export default TodoApp