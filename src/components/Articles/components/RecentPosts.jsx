import React from 'react'
import './RecentPosts.scss'
import { articlesHTML } from '../articlesHTML'
import { Link } from 'react-router-dom'

const RecentPosts = () => {
    const filteredArticlesByDate = articlesHTML.sort((a,b) => new Date(b.published) - new Date(a.published))
    const top5Articles = filteredArticlesByDate.slice(0, 5);

    return (
        <div className='recentPostsContainer'>
            <h2>Recent Articles:</h2>
                {
                    top5Articles.map((article) => <div key={article.id}>
                        <Link className='link' to={`/articles/${article.path}`}>{article.title}</Link>
                    </div>)
                }
        </div>
    )
}

export default RecentPosts