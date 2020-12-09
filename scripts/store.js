import api from '../scripts/api.js'

const store = {
    bookmarks: [],
    adding: false,
    error: null,
    filter: 0
  };

  function findBookmarkById(id) {
    let foundItem = store.bookmarks.find(bookmark => bookmark.id === id);
    return foundItem;
  }

function addExpand(){
  
    for (let i = 0; i < store.bookmarks.length; i++){
        store.bookmarks[i].expanded = false;
    }
}

function toggleIsExpanded(id) {
  
    let foundItem = findBookmarkById(id);
    foundItem.expanded = !foundItem.expanded;
  }
 
function addToStore(newItem){
  store.bookmarks.push(newItem)
}  

function deleteBookmark(id){
    store.bookmarks = store.bookmarks.filter(b => b.id !== id)
    
  }





  export default{
      store,
      addExpand,
      toggleIsExpanded,
      addToStore,
      deleteBookmark
  }