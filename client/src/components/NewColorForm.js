import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
    color: '',
    code: { hex: ''},
} 

const NewColorForm = ({ getData }) => {
    const [newColor, setNewColor] = useState(initialState)
    const { push } = useHistory()

    const handleChange = e => {
        setNewColor({
            ...newColor,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('api/colors', newColor)
        .then(res => {
            getData(res.data)
        })
        .then(push('/api/colors'))
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <p>add color</p>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='color'
                placeholder='color'
                value={newColor.color}
                onChange={handleChange}
                />
                <input
                type='text'
                name='code'
                placeholder='code'
                value={newColor.code.hex}
                onChange={handleChange}
                />
                <button>add</button>
            </form>
        </div>
    )
}

export default NewColorForm