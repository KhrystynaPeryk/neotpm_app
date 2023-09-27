import React, {useEffect, useState} from 'react'
import axios from 'axios';

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
    <div>Reviews</div>
  )
}

export default Reviews