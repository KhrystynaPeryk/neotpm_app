import React, { useEffect, useState } from 'react'
import { YouTubeEmbed } from 'react-social-media-embed';
import './EmbeddedYouTube.scss'

const YOUTUBE_DEFAULT_WIDTH = 720;
const YOUTUBE_DEFAULT_HEIGHT = 405;

const EmbeddedYouTube = ({youtubeUrl}) => {
    // for youtube video
    const [embedWidth, setEmbedWidth] = useState(YOUTUBE_DEFAULT_WIDTH);
    const [embedHeight, setEmbedHeight] = useState(YOUTUBE_DEFAULT_HEIGHT);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 720) {
                setEmbedWidth(320);
                setEmbedHeight(180);
            } else {
                setEmbedWidth(YOUTUBE_DEFAULT_WIDTH);
                setEmbedHeight(YOUTUBE_DEFAULT_HEIGHT);
            }
            };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set the correct size
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return (
        <div className='video'>
            <YouTubeEmbed
                url={youtubeUrl}
                width={embedWidth}
                height={embedHeight}
                youTubeProps={{
                    onReady: async (r) =>
                        (await r.target.getIframe()).addEventListener('load', () => setEmbedHeight((height) => height + 1)),
                }}
            />
        </div>
    )
}

export default EmbeddedYouTube