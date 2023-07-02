import React from 'react'
import NavBar from '../../../common/NavBar/NavBar'
import Logo from '../../../common/Logo/Logo'
import Footer from '../../../common/Footer/Footer'
import './PowerOfAttorney.scss'

const PowerOfAttorney = () => {
  return (
    <div className='property-container'>
        <div className='property-before-table'>
            <NavBar />
            <Logo />
            <div className='property-header-wrapper'>
            <p className='property-header'>POA Packages</p>
            </div>
        </div>
        <div className="owner-support-item-container">
            <div className='table-column'>
                <div className='table-column-header'>
                    <div>LITE</div>
                    <div>POA Assistance</div>
                </div>
                <div className='table-column-body'>
                    <div className='table-row-item'>POA Drafting in English</div>
                    <div className='table-row-item'>Unlimited Amendments</div>
                    <div className='table-row-item'>Apply Online Attestation for Approval (Fees included)</div>
                    <div className='table-row-item'>Assist Online Attestation Appointment Setting (Fees included)</div>
                    <div className='table-row-item'>Translate the POA into Arabic (Fees included)</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                </div>
                <div>AED 2,500.00</div>
                <button type='button'>Buy</button>
            </div>
            <div className='table-column'>
                <div className='table-column-header'>
                    <div>PROPER</div>
                    <div>POA + POA Assistance</div>
                </div>
                <div className='table-column-body'>
                    <div className='table-row-item'>POA Drafting in English</div>
                    <div className='table-row-item'>Unlimited Amendments</div>
                    <div className='table-row-item'>Apply Online Attestation for Approval (Fees included)</div>
                    <div className='table-row-item'>Assist Online Attestation Appointment Setting (Fees included)</div>
                    <div className='table-row-item'>Translate the POA into Arabic (Fees included)</div>
                    <div className='table-row-item'>Be the POA on the POA Document (3 years)</div>
                    <div className='table-row-item'>Sign Documents as the POA</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                    <div className='table-row-item table-cross'>╳</div>
                </div>
                <div>AED 4,500.00</div>
                <button type='button'>Buy</button>
            </div>
            <div className='table-column'>
                <div className='table-column-header'>
                    <div>COMPREHENSIVE</div>
                    <div>PM with POA</div>
                </div>
                <div className='table-column-body'>
                    <div className='table-row-item'>POA Drafting in English</div>
                    <div className='table-row-item'>Unlimited Amendments</div>
                    <div className='table-row-item'>Apply Online Attestation for Approval (Fees included)</div>
                    <div className='table-row-item'>Assist Online Attestation Appointment Setting (Fees included)</div>
                    <div className='table-row-item'>Translate the POA into Arabic (Fees included)</div>
                    <div className='table-row-item'>Be the POA on the POA Document (3 years)</div>
                    <div className='table-row-item'>Sign Documents as the POA</div>
                    <div className='table-row-item'>Fix Issues Relating to the Property (tawtheeq, title deed, leasing etc)</div>
                    <div className='table-row-item'>Fix Any Roadblocks Relating to Getting the POA Approved</div>
                    <div className='table-row-item'>Tenant Sourcing with a Dedicated PM to Promote</div>
                    <div className='table-row-item'>Lease Management</div>
                    <div className='table-row-item'>Move-in/out Documentation Permission and Clearances, Inspection</div>
                    <div className='table-row-item'>Maintenance Liaison</div>
                    <div className='table-row-item'>Tawtheeq Management</div>
                    <div className='table-row-item'>Lease Renewal Management</div>
                    <div className='table-row-item'>Cheque Deposit Services</div>
                    <div className='table-row-item'>Security Deposit Settlement</div>
                    <div className='table-row-item'>Tenant Management</div>
                    <div className='table-row-item'>Ensure the Property Complies with Governmental Requirement</div>
                </div>
                <div>6% of the Rent with a Minimum Annual Fee of AED 6,500.00</div>
                <button type='button'>Buy</button>
            </div>
        </div>
        <div className='footer-wrapper'>
            <Footer />
        </div>
    </div>
  )
}

export default PowerOfAttorney