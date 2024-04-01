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
                <Logo isCPlogoVisible={true}/>
                <div className='property-header-wrapper'>
                    <p className='property-header'>Reviews</p>
                </div>
            </div>
            <div className='review-container'>
                {reviews.map((review) => {
                    const {
                        reviewer,
                        createTime,
                        comment,
                        reviewId
                    } = review
                    return (
                        <div key={reviewId} className='review-wrapper'>
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
// https://www.googleapis.com/auth/business.manage in Authorize APIs in Step 1
// Request URL in Step 2 https://mybusinessaccountmanagement.googleapis.com/v4/accounts/116486932869397590083/locations/720535007847434328/reviews

export default Reviews