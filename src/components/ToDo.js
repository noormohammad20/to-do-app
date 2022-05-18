import React from 'react'
import { useParams } from 'react-router-dom'

const ToDo = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>This Is ToDo</h2>
        </div>
    )
}

export default ToDo