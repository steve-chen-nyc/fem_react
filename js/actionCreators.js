import { SET_SEARCH_TERM, ADD_OMBD_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm } // es6 sugar really searchTerm:searchTerm
}

export function addOMDBData (imdbID, omdbData) {
  return {type: ADD_OMBD_DATA, imdbID, omdbData}
}

export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
    .then((response) => {
      dispatch(addOMDBData(imdbID, response.data))
    .catch((error) => console.error('axios error', error))
    })
  }
}
