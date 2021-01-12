import React from 'react'

const Banner = ({setNominated}) => {
    return(
        <div className='bruceBanner'>
            You have nominated 5 movies. You can start over by pushing the RED button
            <button type='button' className='resetButton' onClick={()=>setNominated([])}>Reset</button>
        </div>
    )
}

export default Banner 