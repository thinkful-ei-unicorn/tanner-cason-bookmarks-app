
import store from "../scripts/store.js";
import submit from "../scripts/submit.js";
import api from "../scripts/api.js";
import html from "../scripts/html.js"

let baseURL = 'https://thinkful-list-api.herokuapp.com/tanner'


function render(){
html.headerUi();
html.generateInputArea();
renderBookmarksArea();
submit.handleNewItemSubmit();
submit.handleToggleExpand();
}

/*function generateBookmarkElement() {
    const bookmark = store.store.bookmarks;
    for (let i = 0; i < bookmark.length; i++){
    if (bookmark[i].expanded === true) {
      return bookmarksExpandedUi();
    } else {
      return bookmarksUi();
    }
  }
}*/

function renderBookmarksArea(){
    //let bookmarks = store.store.bookmarks.map(bookmark => generateBookmarkElement(bookmark));
       $('.bookmarkArea').html(html.bookmarksUi())
       
        }
    



function main(){
api.getBookmarks()
 .then(res => res.json())
 .then(data => {
     store.store.bookmarks = data
     
     render()
 }).catch(err => {
     console.log(err)
 })
 store.addExpand();
console.log(store.store.bookmarks)
html.generateHTML();
//render();
    }


$(main)

export default{
    render,
}

