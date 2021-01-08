import React,{ useContext, useEffect } from 'react'
import MoviesContainer from './MoviesContainer'
import QueryContext from './contexts/QueryContext'

const BottomContainer = ({ movies }) => {
    const { nominated, setNominated } = useContext(QueryContext)

    const nominateHandler = (el) =>{
        if(!nominated.includes(el)){
            nominated.push(el)
        }
    }

    const removeHandler = (obj) =>{
        console.log(obj,nominated)
        const newArray=nominated.filter(el=>el.imdbID!==obj.imdbID)
        setNominated(newArray)
    }

    return(
        <div className='bottomContainer'>
            <MoviesContainer movies={movies} name="Nominate A Movie" onPress={nominateHandler}/>
            <MoviesContainer movies={nominated} name="Nominated Movies" onPress={removeHandler} nominatedContainer={true}/>
        </div>
    )
}

export default BottomContainer 