import React from 'react'

import MovieCard from './MovieCard'

const MoviesContainer = ({ name, movies, nominatedContainer, onPress }) => {
    
    const movieToCards = () => 
        (movies?.map(el=>
            <MovieCard 
                key={el.imdbID} 
                el={el} 
                nominatedContainer={nominatedContainer}
                onPress={onPress}
            />
        )
    ) 
    
    return(
    <div className='moviesContainer'>
        <div className='title'><div className='spin'>{name}</div></div>
        <div className='cardContainer'>
            {movieToCards()}
        </div>
    </div>

    )
}

export default MoviesContainer