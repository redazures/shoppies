import React, { useEffect, useState } from 'react'
import { getMovies } from '../api/apiCalls'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import useApi from '../components/hooks/useApi'
import Container from '../components/Container'

import '../styles/MoviesPage.css'

const data=[
    {
        Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Type: "movie",
        Year: "2011",
        imdbID: "tt1201607"
    },
    {
        Title: "Spaceballs",
        Year: "1987",
        imdbID: "tt0094012",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjVjOGQ0OTctNDhkZC00ZGNiLWI2ZGEtYjZlMWZjOTlkNDlhXkEyXkFqcGdeQXVyNjg1MjEwOTM@._V1_SX300.jpg"
    },
]

const MoviesContainer = () =>{
    const [movies, setMovies ] = useState([])
    const populateMovies = useApi(getMovies)
    const [ search, setSearch ] = useState("")
    const [ movieQuery, setMovieQuery ] = useState("")

    const populate = ()=>{
    //     const response = await getMovies()
    //     console.log(response.data)
            setMovies(data)
    }
    
    useEffect(()=>{
        populate()
        console.log("this is running")
        const timeOutSearch = setTimeout(() => setMovieQuery(search),500);
        return () => clearTimeout(timeOutSearch)
    },[search])

    console.log(movies)
    const width = window.innerWidth
    return(
        <div>
            <Header>{width>1000 ? "Shoppies: Why Spaceballs is the best movie of all time" : "Shoppies"}</Header>
            <SearchBar ssearch={search} setSearch={setSearch} />
            <div className="output"><span>{movieQuery ? `Searching for ${movieQuery.replace(" ","+")}`: null }</span></div>
            <Container movies={movies}/>
        </div>
    )
}

export default MoviesContainer