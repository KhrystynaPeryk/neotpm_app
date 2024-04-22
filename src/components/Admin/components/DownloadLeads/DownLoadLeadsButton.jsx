import React from 'react'
import './DownLoadLeadsButton.scss'
import { downloadLeadsExcel } from '../../../../helpers/downloadLeadsExcel'

const DownLoadLeadsButton = ({leads}) => {
    return (
        <button className='downloadLeadsBtn' onClick={() => downloadLeadsExcel(leads)}>Download All Leads</button>
    )
}

export default DownLoadLeadsButton