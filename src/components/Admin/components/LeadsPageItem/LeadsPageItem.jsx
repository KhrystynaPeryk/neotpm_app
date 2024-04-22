import React from 'react'
import './LeadsPageItem.scss'

const LeadsPageItem = ({date, email, name, phone, request, source}) => {
    return (
        <>
            <div className='leadsPageItemContainer'>
                <h2>Date</h2>
                <p>{date}</p>
            </div>
            <div className='leadsPageItemContainer'>
                <h2>Name</h2>
                <p>{name}</p>
            </div>
            <div className='leadsPageItemContainer'>
                <h2>Email</h2>
                <p>{email}</p>
            </div>
            <div className='leadsPageItemContainer'>
                <h2>Phone</h2>
                <p>{phone}</p>
            </div>
            <div className='leadsPageItemContainer'>
                <h2>Request</h2>
                <p>{request}</p>
            </div>
            <div className='leadsPageItemContainer'>
                <h2>Source</h2>
                <p>{source}</p>
            </div>
        </>
    )
}

export default LeadsPageItem