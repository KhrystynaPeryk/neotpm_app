import React, {useEffect, useState} from 'react'
import './Reviews.scss'
import NavBar from '../common/NavBar/NavBar';
import Logo from '../common/Logo/Logo';
import Footer from '../common/Footer/Footer';
import ReviewItem from './components/ReviewItem';
import reviewsJson from './components/reviews.json'
import { countMonthsAgo } from '../../helpers/countMonthsAgo';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const reviewsWithComments = reviewsJson.reviews.filter(review => review.comment != null)
        setReviews(reviewsWithComments)
    }, []); 

    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
                <div className='property-header-wrapper'>
                    <p className='property-header'>Reviews</p>
                </div>
            </div>
            <div className='review-container'>
                {reviews.map((review, index) => {
                    const {
                        reviewer,
                        createTime,
                        comment
                    } = review
                    return (
                        <div key={index} className='review-wrapper'>
                            <ReviewItem 
                                name = {reviewer.displayName}
                                photoUrl = {reviewer.profilePhotoUrl}
                                relativeTimeAgo = {countMonthsAgo(createTime)}
                                text = {comment}
                            />
                        </div>
                    )
                })}
            </div>        
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    )
}

// refreshing reviews on https://developers.google.com/oauthplayground/, press gear, choose client-side, paste client id: 992109642155-gllh0un55pskcg7hadq7mb2g37uq0bva.apps.googleusercontent.com

export default Reviews