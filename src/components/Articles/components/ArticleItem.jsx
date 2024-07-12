import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ArticleItem.scss'
import { articlesHTML } from '../articlesHTML'
import NavBar from '../../common/NavBar/NavBar';
import Footer from '../../common/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../common/Spinner/Spinner';
import { YouTubeEmbed } from 'react-social-media-embed';

const YOUTUBE_DEFAULT_WIDTH = 720;
const YOUTUBE_DEFAULT_HEIGHT = 405;

const ArticleItem = () => {
  const {path} = useParams()
  const [article, setArticle] = useState({ title: '', metaDescription: '', headImg: '', htmlBody: '' })
  const [isLoading, setIsLoading] = useState(true)

  const [embedWidth, setEmbedWidth] = useState(YOUTUBE_DEFAULT_WIDTH);
  const [embedHeight, setEmbedHeight] = useState(YOUTUBE_DEFAULT_HEIGHT);

  useEffect(() => {
    const filteredArticles = articlesHTML.filter((article) => article.path === path);
    const [filteredArticle] = filteredArticles;
    if (filteredArticle) {
      setArticle(filteredArticle);
      setIsLoading(false)
    }
  }, [path]);

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
    <div className='property-container'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{article.title}</title>
            <meta name='description' content={article.metaDescription} data-rh="true"/>
            <meta property='og:type' content='article' />
            <meta property='og:title' content={article.title} />
            <meta property='og:description' content={article.metaDescription} />
            <meta property='og:image' content={article.headImg} />
            <meta property="og:site_name" content="Transparent Property Management and Maintenance LLC"></meta>
          </Helmet>
          <div className='property-before-table'>
            <NavBar />
            <div className='articleItem-container'>
              <div dangerouslySetInnerHTML={{ __html: article.htmlBody }} />
              {article.youtubeUrl && (
                <div className='video'>
                  <YouTubeEmbed
                    url={article.youtubeUrl}
                    width={embedWidth}
                    height={embedHeight}
                    youTubeProps={{
                      onReady: async (r) =>
                        (await r.target.getIframe()).addEventListener('load', () => setEmbedHeight((height) => height + 1)),
                    }}
                  />
              </div>
              )}
            </div>
          </div>
          <div className='footer-wrapper'>
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}

export default ArticleItem