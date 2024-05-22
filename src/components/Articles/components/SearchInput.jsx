import React from 'react'
import './SearchInput.scss'

const SearchInput = ({keyword, handlerFunction}) => {
    return (
        <div className='searchInputContainer'>
            <p>Search in articles:</p>
            <input
                type='text'
                value={keyword}
                maxLength={20}
                onChange={handlerFunction}
                placeholder='Enter a word'
            />
        </div>
    )
}

export default SearchInput