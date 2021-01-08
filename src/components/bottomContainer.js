import React,{ useContext  } from 'react'
import MoviesContainer from './MoviesContainer'
import QueryContext from './contexts/QueryContext'

const BottomContainer = ({ movies }) => {
    const { nominated, setNominated } = useContext(QueryContext)

    const nominateHandler = (el) =>{
        if(!nominated.includes(el) && nominated.length<5){
            nominated.push(el)
            localStorage.setItem("data", JSON.stringify(nominated));
        }
    }

    const removeHandler = (obj) =>{
        console.log(obj,nominated)
        const newArray=nominated.filter(el=>el.imdbID!==obj.imdbID)
        setNominated(newArray)
        localStorage.setItem("data", JSON.stringify(nominated));
    }

    return(
        <div className='bottomContainer'>
            <MoviesContainer movies={movies} name="Nominate A Movie" onPress={nominateHandler}/>
            <MoviesContainer movies={nominated} name="Nominated Movies" onPress={removeHandler} nominatedContainer={true}/>
        </div>
    )
}

export default BottomContainer 

//there is something about this comtainer that will not change