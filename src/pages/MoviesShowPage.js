import React, { useEffect, useState } from 'react'
import CircularIndeterminate from '../components/CircularIndeterminate';
import { getMovies } from '../api/apiCalls'

import Header from '../components/Header'
import QueryContext from "../components/contexts/QueryContext";
import SearchBar from '../components/SearchBar'
import SubMoviesContainer from '../components/SubMoviesContainer'

import '../styles/moviesShowPage.css'

const MoviesShowPage = () =>{
    const [ movies, setMovies ] = useState([])
    const [ movieQuery, setMovieQuery ] = useState("")
    const [ search, setSearch ] = useState("")
    const [ displayNominate, setDisplayNominate ] = useState("")
    const [ nominated, setNominated ] = useState(JSON.parse(localStorage.getItem("data")) || [])

    const populate = async ()=>{
        if(!search) return
        const response = await getMovies(movieQuery)
        if (!response.ok) return setMovieQuery(movieQuery.split("+")[0])
        setMovies(response.data.Search)
    }

    useEffect(()=>{
        populate()
    },[movieQuery])

    useEffect(()=>{
        const timeOutSearch = setTimeout(() => setMovieQuery(search),1000);
        return () => clearTimeout(timeOutSearch)
    },[search])

    return(
        <QueryContext.Provider value={{ setDisplayNominate, nominated, setNominated, setMovieQuery  }}>
            <Header>{window.innerWidth>1000 ? "Shoppies: Why Spaceballs is the best movie of all time" : "Shoppies"}</Header>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="output"><span>{search && movies?.length===0 && <CircularIndeterminate/>}</span><span>{ (movieQuery && !displayNominate) ? `Searched for ${movieQuery}`: displayNominate ||null }</span></div>
            <SubMoviesContainer movies={movies}/>
        </QueryContext.Provider>
    )
}

export default MoviesShowPage