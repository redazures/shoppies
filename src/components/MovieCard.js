import React from 'react'
import '../styles/movieCard.css'

const defaultPoster = "https://pyxis.nymag.com/v1/imgs/50c/2ad/eed491e2a107c7446b014ba2f92efecd04-14-dumb-dumber-to.rsquare.w700.jpg"

const MovieCard = ({ title="No Title", year="Year", poster=defaultPoster, imdbID, favs}) =>(
    <div className='movieCard' 
        style={{
            backgroundImage:`url(${poster})`,
            }}>
        <div className='cardBottom'>
            <div>{`${title} - ${year}`}</div>
            <button type='button' className='nominate'>Nominate</button>
        </div>
    </div>
)

export default MovieCard