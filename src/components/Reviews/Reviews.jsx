import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Reviews.scss'
import NavBar from '../common/NavBar/NavBar';
import Logo from '../common/Logo/Logo';
import Footer from '../common/Footer/Footer';
import ReviewItem from './components/ReviewItem';
import Spinner from '../common/Spinner/Spinner';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const response = await axios.get('https://zohoapi-fxfj3ovifq-uc.a.run.app/get-google-reviews');
                setIsLoading(false)
                setReviews(response.data);
                console.log(response.data)
            } catch (error) {
                setIsLoading(false)
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
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
            {isLoading ? <div className='review-spinner'><Spinner /></div> : (
                <div className='review-container'>
                    {reviews.map((review, index) => {
                        const {
                            author_name,
                            profile_photo_url,
                            rating,
                            relative_time_description,
                            text
                        } = review
                        return (
                             <div key={index} className='review-wrapper'>
                                <ReviewItem 
                                    name = {author_name}
                                    photoUrl = {profile_photo_url}
                                    rating = {rating}
                                    relativeTimeAgo = {relative_time_description}
                                    text = {text}
                                />
                            </div>
                         )
                    })}
                </div>
            )}
        <div className='footer-wrapper'>
            <Footer />
        </div>
    </div>
  )
}

export default Reviews