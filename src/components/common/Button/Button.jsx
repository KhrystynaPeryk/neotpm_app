import React from 'react'
import './Button.scss'

const Button = ({ buttonText, onClick, type, className }) => {
  return (
    <button
        onClick={onClick}
        type={type}
        className={className}
    >
        {buttonText}
    </button>
  )
}

export default Button