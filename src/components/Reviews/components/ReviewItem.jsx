import React, {useEffect, useState} from 'react'
import './ReviewItem.scss'

const ReviewItem = ({
    name,
    photoUrl,
    relativeTimeAgo,
    text
}) => {

    const [base64Image, setBase64Image] = useState(null);

    // on page load it converts urls into base64
    useEffect(() => {
        const urlToBase64 = async () => {
            try {
                const response = await fetch(photoUrl);
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = () => {
                    setBase64Image(reader.result);
                };
                reader.readAsDataURL(blob);
            } catch (error) {
                console.error('Error converting URL to base64:', error);
            }
        };

        urlToBase64();
    }, [photoUrl]);

    return (
        <div className='reviewItem-wrapper'>
            <div className='header'>
                <img className='header-img' src={base64Image} loading='lazy' alt='author' />
                <div className='header-meta'>
                    <div className='header-name'>{name}</div>
                    <div className='header-stars'>★ ★ ★ ★ ★</div>
                </div>
            </div>
            <div className='body'>
                <div className='body-text'>{text}</div>
                <div className='body-ago'><i>{relativeTimeAgo}</i></div>
            </div>
        </div>
    )
    }

export default ReviewItem