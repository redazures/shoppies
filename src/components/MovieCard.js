import React, { useState } from 'react'
import '../styles/movieCard.css'

const defaultPoster = "https://pyxis.nymag.com/v1/imgs/50c/2ad/eed491e2a107c7446b014ba2f92efecd04-14-dumb-dumber-to.rsquare.w700.jpg"

const MovieCard = ({ title="No Title", year="Year", poster=defaultPoster, imdbID, favs}) =>{
    const [ onHover, setOnHover ] = useState(false)

    const titleAdjusted =()=>{
        var adjustedtitle = title
        if(title.length>32) {
            adjustedtitle = title.substr(0,26)
            adjustedtitle = adjustedtitle.substr(0, Math.min(adjustedtitle.length, adjustedtitle.lastIndexOf(" "))) + "..."
        }
        return adjustedtitle
    }
    
    return(
        <div className='movieCard' 
            style={onHover ? {
                    transform: 'scale(1.1)',
                    backgroundImage:`url(${poster})`,
                    transition: '0.2s',
                } : 
                    {
                    backgroundImage:`url(${poster})`,
                    transition: '0.2s',
                    }
                }
            onMouseEnter={()=>setOnHover(true)}
            onMouseLeave={()=>setOnHover(false)}
                >
            <div className='cardBottom'>
                
                <button type='button' className='nominate' onClick={()=>console.log("nominate")}>Nominate</button>
                <div>{`${titleAdjusted()} - ${year}`}</div>
            </div>
        </div>

    )
}

export default MovieCard