import React, { useEffect, useState } from 'react'
import CircularIndeterminate from '../components/CircularIndeterminate';
import { getMovies } from '../api/apiCalls'

import BottomContainer from '../components/BottomContainer'
import Header from '../components/Header'
import QueryContext from "../components/contexts/QueryContext";
import SearchBar from '../components/SearchBar'

import '../styles/moviesPage.css'

const MoviesContainer = () =>{
    const [ movies, setMovies ] = useState([])
    const [ movieQuery, setMovieQuery ] = useState("")
    const [ search, setSearch ] = useState("")
    const [ displayNominate, setDisplayNominate ] = useState("")
    const [ nominated, setNominated ] = useState(JSON.parse(localStorage.getItem("data")) || [])

    const populate = async ()=>{
        if(!search) return
        const response = await getMovies(movieQuery)
        setMovies(response.data.Search)
    }

    useEffect(()=>{
        populate()
    },[movieQuery])

    useEffect(()=>{
        const timeOutSearch = setTimeout(() => setMovieQuery(search),1000);
        return () => clearTimeout(timeOutSearch)
    },[search])

    const width = window.innerWidth
    return(
        <QueryContext.Provider value={{ setDisplayNominate, nominated, setNominated, setMovieQuery  }}>
            <Header>{width>1000 ? "Shoppies: Why Spaceballs is the best movie of all time" : "Shoppies"}</Header>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="output"><span>{search && movies.length===0 && <CircularIndeterminate/>}</span><span>{ (movieQuery && !displayNominate) ? `Searched for ${movieQuery}`: displayNominate ||null }</span></div>
            <BottomContainer movies={movies}/>
        </QueryContext.Provider>
    )
}

export default MoviesContainer