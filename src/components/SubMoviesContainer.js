import React,{ useContext  } from 'react'
import MoviesContainer from './MoviesContainer'
import QueryContext from './contexts/QueryContext'

const SubMoviesContainer = ({ movies }) => {
    const { nominated, setNominated } = useContext(QueryContext)

    const nominateHandler = (el) =>{
        if(!nominated.includes(el) && nominated.length<5){
            nominated.push(el)
            localStorage.setItem("data", JSON.stringify(nominated));
        }
    }

    const removeHandler = (obj) =>{
        const newArray=nominated.filter(el=>el.Title!==obj.Title)
        setNominated(newArray)
        localStorage.setItem("data", JSON.stringify(newArray));
    }

    return(
        <div className='bottomContainer'>
            <MoviesContainer movies={movies} name="Nominate A Movie" onPress={nominateHandler}/>
            <MoviesContainer movies={nominated} name="Nominated Movies" onPress={removeHandler} nominatedContainer={true}/>
        </div>
    )
}

export default SubMoviesContainer 

//there is something about this comtainer that will not change