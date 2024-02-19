import React from 'react'
import './TeamMember.scss'

const TeamMember = ({image, name, occupation}) => {
    return (
        <div className='member'>
            <img src={image} alt={name}></img>
            <div className='name'>{name}</div>
            <div className='occupation'>{occupation}</div>
        </div>
    )
}

export default TeamMember