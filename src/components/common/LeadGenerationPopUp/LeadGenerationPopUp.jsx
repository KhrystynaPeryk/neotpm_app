import React from 'react'
import './LeadGenerationPopUp.scss'

const LeadGenerationPopUp = ({ onClose }) => {
  return (
    <div className='lead-popup-container'>
        <form>

        </form>
        <div>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default LeadGenerationPopUp