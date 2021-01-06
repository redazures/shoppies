import React, { useEffect, useState } from 'react'
import { getMovies } from '../api/apiCalls'
import useApi from '../components/hooks/useApi'
import SearchBar from '../components/SearchBar'

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

    const populate = async ()=>{
        const response = await getMovies()
        console.log(response.data)
    }

  useEffect(()=>{
    // populateMovies.request()
  },[])

    console.log(populateMovies.data)
    return(
        <div>
            <SearchBar/>
        </div>
    )
}

export default MoviesContainer