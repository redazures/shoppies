  import client from './client'
  import apiKey from '../config/config'



const getMovies = (movieQuery) => {
    const key=`?apikey=${apiKey}&s=${movieQuery.replace(" ","+")}`
    return client.get(key)
}

export { getMovies }