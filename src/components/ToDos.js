import axios from 'axios'
import React, { useEffect } from 'react'

const ToDos = () => {
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then()
    }, [])
    return (
        <div>
            <h1>This Is ToDos</h1>
        </div>
    )
}

export default ToDos