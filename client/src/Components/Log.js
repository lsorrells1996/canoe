import React, { useState } from 'react'

function Log() {

    const [title, setTitle] = useState('')

    return (
        <div className='container' align='center'>
            <div className='row'>
                <div className='col'>
                    <form type='submit'>
                        <label/> <div>Title:</div>
                        <input type='text' placeholder='Title...'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Log