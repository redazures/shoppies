import React, { useEffect, useState } from 'react'
import { getMovies } from '../api/apiCalls'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import BottomContainer from '../components/BottomContainer'
import QueryContext from "../components/contexts/QueryContext";

import '../styles/moviesPage.css'

const MoviesContainer = () =>{
    const [ movies, setMovies ] = useState([])
    const [ movieQuery, setMovieQuery ] = useState("")
    const [ search, setSearch ] = useState("")
    const [ displayNominate, setDisplayNominate ] = useState("")
    const [ nominated, setNominated ] = useState([])
    
    const populate = async ()=>{
        console.log("this is where it begins")
        if(!search) return
        const response = await getMovies(movieQuery)
        console.log(response.data.Search)
        setMovies(response.data.Search)
        console.log("this is where it ends")
    }

    useEffect(()=>{
        populate()
    },[movieQuery])

    useEffect(()=>{
        console.log("this is running")
        const timeOutSearch = setTimeout(() => setMovieQuery(search),1000);
        return () => clearTimeout(timeOutSearch)
    },[search])

    console.log(movies)
    const width = window.innerWidth
    return(
        <QueryContext.Provider value={{ setDisplayNominate, nominated, setNominated }}>
            <Header>{width>1000 ? "Shoppies: Why Spaceballs is the best movie of all time" : "Shoppies"}</Header>
            <SearchBar ssearch={search} setSearch={setSearch} />
            <div className="output"><span>{movieQuery ? `Searching for ${movieQuery.replace(" ","+")}`: displayNominate ||null }</span></div>
            <BottomContainer movies={movies}/>
        </QueryContext.Provider>
    )
}

export default MoviesContainer