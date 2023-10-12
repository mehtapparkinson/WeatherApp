import React from 'react';
import './searchBar.css';

function SearchBar(props) {
    
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            props.onSearchClick();
        }
    }

    return (
        <div className='search-bar'>
            <input 
                className='search-input' 
                type="text"
                value={props.currentCityValue}
                onChange={e => props.updateCityValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Enter city ...' 
            />
            <button className='search-button' onClick={props.onSearchClick}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
