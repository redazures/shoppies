import React from 'react'
import MoviesContainer from './MoviesContainer'

const favs = JSON.parse(localStorage.getItem("favs") || "[]");

const Container = ({ movies }) => {
    return(
        <div className='bottomContainer'>
            <MoviesContainer movies={movies} favs={favs} name="Nominate A Movie"/>
            <MoviesContainer favs={favs} name="Nominated Movies"/>
        </div>
    )
}

export default Container 