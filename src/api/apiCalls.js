  import client from './client'
  import apiKey from '../config/config'

const key=`?apikey=${apiKey}&s=harry+potter`

const getMovies = () => {

    return client.get(key)
}

export { getMovies }