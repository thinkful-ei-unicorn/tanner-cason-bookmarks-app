import store from '../scripts/store.js'
import app from '../scripts/app.js'
import submit from '../scripts/submit.js'

const baseURL = 'https://thinkful-list-api.herokuapp.com/tanner/bookmarks';

const listApiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then (response => {
      if (!response.ok) {
        error = true;
      }
      return response.json();
    })
    .then (data => {
      if (!error) {
        return data;
      } else {
        return data;
      }
    });
};


  const getBookmarks = function () {
    return fetch(baseURL)
 }
  

  const addBookmark = function(newBookmark){
    return listApiFetch(`${baseURL}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newBookmark
        
    })
    
  }

  const deleteBookmark = function(id){
    return fetch(baseURL, {
      method: 'DELETE'
    })
  }

  export default{
      addBookmark,
      getBookmarks
  }