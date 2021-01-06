import React from 'react'
import { InputAdornment, Input } from '@material-ui/core';
import { Search } from '@material-ui/icons';

// import './SearchBar.css';

const SearchBar = ({ search, setSearch }) => (
    <div className='searchWrapper'>
        <Input 
            type='text'
            placeholder="Search"
            className="searchInput" 
            name="search" 
            value={ search } 
            onChange={ e => setSearch(e.target.value) }
            startAdornment={
                <InputAdornment position="start">
                    <Search/>
                </InputAdornment>
            }
        />
    </div>
)

export default SearchBar