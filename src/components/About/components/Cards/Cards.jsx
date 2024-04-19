import React from 'react';
import LessVacancies from '../../../../assets/images/about-us/lessVacancies.svg'
import BetterTenants from '../../../../assets/images/about-us/betterTenants.svg'
import LessDamage from '../../../../assets/images/about-us/LessDamage.svg'
import PieceOfMind from '../../../../assets/images/about-us/pieceOfMind.svg'
import ServiceMix from '../../../../assets/images/about-us/serviceMix.svg'

import './Cards.scss';

const Cards = () => {
    return (
        <div className='cards-container'>
            {['LESS VACANCIES', 'BETTER TENANTS', 'LESS DAMAGE', 'PEACE OF MIND', 'SERVICE MIX'].map((title) => (
                <div
                    className='cards-container-item'
                    key={title}
                >
                    <div className='front'>
                        <img src={
                                title === 'LESS VACANCIES' ? LessVacancies :
                                title === 'BETTER TENANTS' ? BetterTenants :
                                title === 'LESS DAMAGE' ? LessDamage :
                                title === 'PEACE OF MIND' ?  PieceOfMind :
                                ServiceMix
                            } alt={title}
                        />
                        <h3>{title}</h3>
                    </div>
                    <div className='back'>
                        <h3>{title}</h3>
                        <p>{
                            title === 'LESS VACANCIES' ? 'Effective marketing of vacant homes, proactive lease renewals and premarketing for upcoming vacancies helps us keep vacancy costs to a minimum for our clients.' :
                            title === 'BETTER TENANTS' ? 'Beautiful pictures and broad ad syndication helps us maximize interest. By screening using income, credit, and rental history, we find you great tenants.' :
                            title === 'LESS DAMAGE' ? 'Carefully documented move-in inspections conducted in-person on the day of move in followed by routine internal property inspections helps us prevent excessive wear at the property and address early signs of neglect or damage quickly.' :
                            title === 'PEACE OF MIND' ? 'We are a capable and trustworthy management team watching over your rental business so you don&apos;t have to worry and so you can spend more time living life.' :
                            'Our comprehensive suite of services ensures a seamless experience for both tenants and landlords'
                        }</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;