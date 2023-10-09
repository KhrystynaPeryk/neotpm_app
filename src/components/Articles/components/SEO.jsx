import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({title, description, type}) {
    return (
    <Helmet>
        { /* Standard metadata tags */ }
        <title>{title}</title>
        <meta name='description' content={description} />
        { /* End standard metadata tags */ }
        { /* Facebook tags */ }
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        { /* End Facebook tags */ }
    </Helmet>
    )
}