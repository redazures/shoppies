  import client from './client'
  import apiKey from '../config/config'



const getMovies = (movieQuery) => {
  const key=`?apikey=${apiKey}&s=${movieQuery.replace(" ","+")}`
  console.log(key)
    return client.get(key)
}

export { getMovies }