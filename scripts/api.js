import store from '../scripts/store.js'
import app from '../scripts/app.js'
import submit from '../scripts/submit.js'

const baseURL = 'https://thinkful-list-api.herokuapp.com/tanner/bookmarks';

const listApiFetch = function (url, options, cb) {
  let error;
  return fetch(url, options)
    .then (response => {
      if (!response.ok) {
        error = true;
      }
      return response.json();
    })
    .then (data => {
      if (!error) {
        debugger;
        data.expanded = false;
        cb(data);
        return data;
      } else {
        return data;
      }
    });
};


  const getBookmarks = function () {
    return fetch(baseURL)
 }
  

  const addBookmark = function(newBookmark, cb){
    return listApiFetch(`${baseURL}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBookmark)
        
    }, cb)
  }

  const editBookmark = function(newBookmark, cb){
    return listApiFetch(`${baseURL}/${newBookmark.id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBookmark)
        
    }, cb)
  }

  const deleteBookmark = function(id){
    return fetch(`${baseURL}/${id}`, {
      method: 'DELETE'
    })
  }

  export default{
      addBookmark,
      getBookmarks,
      deleteBookmark
  }