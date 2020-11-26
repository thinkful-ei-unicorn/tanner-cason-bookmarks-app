import store from "../scripts/store.js";
import submit from "../scripts/submit.js"



function generateHTML(){
    $('body').html(`<header></header><div class="inputField"></div><hr><div class="bookmarkArea"></div>`)
}

function headerUi(){
$('header').html(`<h1>My Bookmarks App</h1>`)
}

function generateInputArea(){
    $('.inputField').html(
        `<form class="inputForm">
        <input id="name" type="string" placeholder="Bookmark Name"><br>
        <input id="link" type="string" placeholder="Bookmark Link"><br>
        <input id="description" type="string" placeholder="description"><br>
        <select id="rating" type="" placeholder="Rating"><br> <!-- rating system will be updated with styling-->
            <option name="1star">1</option>
            <option name="2star">2</option>
            <option name="3star">3</option>
            <option name="4star">4</option>
            <option name="5star">5</option>
        </select><br>    
        <button type="submit" id="submit">Submit</button>
    </form>`
    )
}

function bookmarksUi(){
    $('.bookmarkArea').html(generateBookmarksArea())
}

function generateBookmarksArea(){
    let items = store.store.bookmarks
    let itemsDisplay = [];
    let itemHTML = [];
    for(let i = 0; i < items.length; i++){
       if(items[i].expanded === false){ 
           itemHTML = `<div class="listItem" id="listItem">
           <div class="innerObject">
               <p>${items[i].title}</p>
           </div>
           <div class="innerObject">
               <p>${items[i].rating}</p> 
           </div>
       </div>` 
       }

    itemsDisplay.push(itemHTML);   
    }
}

function render(){
    headerUi();
generateInputArea();
bookmarksUi();
}

function main(){
generateHTML();
render();    
submit.handleNewItemSubmit();

}

$(main)