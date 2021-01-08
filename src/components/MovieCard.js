import React, { useState, useContext } from 'react'

import QueryContext from './contexts/QueryContext'
import '../styles/movieCard.css'

const defaultPoster = "https://pyxis.nymag.com/v1/imgs/50c/2ad/eed491e2a107c7446b014ba2f92efecd04-14-dumb-dumber-to.rsquare.w700.jpg"

const MovieCard = ({ el, nominatedContainer, onPress, }) =>{
    const [ onHover, setOnHover ] = useState(false)
    const { setDisplayNominate, nominated } = useContext(QueryContext)
    const { Title, Year, Poster } = el

    const titleAdjusted =()=>{
        var adjustedtitle = Title
        if(Title && Title.length>32) {
            adjustedtitle = Title.substr(0,26)
            adjustedtitle = adjustedtitle.substr(0, Math.min(adjustedtitle.length, adjustedtitle.lastIndexOf(" "))) + "..."
        }
        return adjustedtitle
    }

    const buttonDisplay = ()=>{
        return nominatedContainer ? "Remove" : "Nominate"
    }
    
    return(
        <div className='movieCard' 
            style={onHover ? {
                    transform: 'scale(1.1)',
                    backgroundImage:`url(${Poster || defaultPoster })`,
                    transition: '0.2s',
                } : 
                    {
                    backgroundImage:`url(${Poster})`,
                    transition: '0.2s',
                    }
                }
            onMouseEnter={()=>{
                setOnHover(true)
                setDisplayNominate("Nominate " + Title)
            }}
            onMouseLeave={()=>{
                setOnHover(false)
                setDisplayNominate("")
            }}
                >
            <div className='cardBottom'>
                <button type='button' className='nominate' onClick={()=>onPress(el)} disabled={nominated.includes(el) && !nominatedContainer}>{buttonDisplay()}</button>
                <div>{`${titleAdjusted()} - ${Year}`}</div>
            </div>
        </div>

    )
}

export default MovieCard