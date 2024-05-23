import React from 'react'
import './SearchInput.scss'

const SearchInput = ({keyword, handleOnChange, handleOnClick}) => {
    return (
        <div className='searchInputOuterContainer'>
            <div className='searchInputContainer'>
                <p>Search topics:</p>
                <input
                    type='text'
                    value={keyword}
                    maxLength={20}
                    onChange={handleOnChange}
                    placeholder='Search'
                />
                <button type='button' onClick={handleOnClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchInput