import React from 'react'
import MovieCard from './MovieCard'

const MoviesContainer = ({ name, movies}) => {
    
    const movieToCards = () => (movies?.map(el=><MovieCard key={el.imdbID} title={el.Title} year={el.Year} poster={el.Poster}/>)) 
    // console.log(movies ? movies[0].Title : null)
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