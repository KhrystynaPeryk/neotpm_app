import React from 'react'
import './Spinner.scss'

const Spinner = () => {
    return (
        <div className='spinner-container'>
            <div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner