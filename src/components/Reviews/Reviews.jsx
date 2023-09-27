import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NavBar from '../common/NavBar/NavBar';
import Logo from '../common/Logo/Logo';
import Footer from '../common/Footer/Footer';
import ReviewItem from './components/ReviewItem';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://zohoapi-fxfj3ovifq-uc.a.run.app/get-google-reviews');
          setReviews(response.data);
          console.log(response.data)
        } catch (error) {
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
        <div className='review-wrapper'>
            {reviews.map((review, index) => {
                const {
                    name,
                    photoUrl,
                    rating,
                    relativeTimeAgo,
                    text
                } = review
                return (
                    <div key={index}>
                        <ReviewItem 
                            name = {name}
                            photoUrl = {photoUrl}
                            rating = {rating}
                            relativeTimeAgo = {relativeTimeAgo}
                            text = {text}
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

export default Reviews