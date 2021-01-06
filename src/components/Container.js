import React from 'react'
import MoviesContainer from './MoviesContainer'

const Container = ({ movies }) => (
    <div className='movieContainer'>
        <MoviesContainer movies={movies}/>
        <MoviesContainer favs={}/>
    </div>
)

export default Container 