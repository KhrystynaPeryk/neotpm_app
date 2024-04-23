import React, {useEffect, useState} from 'react'
import './LeadsPage.scss'
import { fetchLeadsfromFirestore } from '../../../../firebaseStorage/downloadFirebaseFile'
import LeadsPageItem from '../LeadsPageItem/LeadsPageItem'
import DownLoadLeadsButton from '../DownloadLeads/DownLoadLeadsButton'

const LeadsPage = () => {
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchLeads = async () => {
            setIsLoading(true)
            const details = await fetchLeadsfromFirestore();
            setLeads(details);
            setIsLoading(false)
        };

        fetchLeads();
    }, []);
    
    return (
        <>
            {isLoading ? <div className='leadsPageContainer-title'>Loading...</div> : (
                <>
                    {leads.length === 0 ? (
                        <div className='leadsPageContainer-title'>No Data...</div>
                    ) : (
                        <>
                            <div className='leadsPageContainer-title'>Leads starting from 22-Apr-2024</div>
                            <DownLoadLeadsButton leads={leads}/>
                            <ul className='leadsPageContainer'>
                                {leads.map(detail => (
                                    <li key={detail.id}>
                                        <LeadsPageItem {...detail} />
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default LeadsPage