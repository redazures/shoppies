import React from 'react'

const MoviesContainer = ({ name, movies}) => (
    <div className='moviesContainer'>
        <div className='title'><div className='spin'>{name}</div></div>
    </div>
)

export default MoviesContainer