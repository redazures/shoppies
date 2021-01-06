import React from 'react'

const MovieCard = ({ title, year, poster, imdbID, favs}) =>(
    <div className='movieCard'>
        <img src={poster} alt={imdbID}/>
        <span>{`${title} ${year}`}</span>
        <button type='button' className='nominate'>{favs.includes()</button>
    </div>
)

export default MovieCard