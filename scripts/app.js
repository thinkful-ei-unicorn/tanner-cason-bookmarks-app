
import store from "../scripts/store.js";
import submit from "../scripts/submit.js";
import api from "../scripts/api.js";
import html from "../scripts/html.js"


function render(){

renderBookmarksArea();

}



function renderBookmarksArea(){
    $('.bookmarkArea').empty();
    $('.bookmarkArea').html(html.renderBookmarksUi())
       //console.log(store.store.bookmarks)
        }
    



function main(){
api.getBookmarks()
 .then(res => res.json())
 .then(data => {
     store.store.bookmarks = data
     store.addExpand();
     render()
 }).catch(err => {
     console.log(err)
 })
html.generateHTML();
html.headerUi();
html.generateInputArea();
submit.handleNewItemSubmit();
submit.handleToggleExpand();
submit.handleDeleteClick();
submit.handleFilter();

render();
}


$(main)

export default{
    render,
    renderBookmarksArea,
    main
}

