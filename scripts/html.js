import store from "../scripts/store.js"

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
    const list = store.store.bookmarks.map(b => {
      return (
        `<div class="listItem" data-bookmark-id="${b.id}">
           <div class="innerObject">
               <p>${b.title}</p>
           </div>
           <div class="innerObject">
               <p>${b.rating}</p> 
           </div>
           <form class="expand" id="expand">
                   <button class=expandButton>Expand</button>
            </form>
       </div>`
      )
    })
    return (
      `<div>${list.join(" ")}</div>`
    )
}

function bookmarksExpandedUi(){
    return(
        `<div class="listItemFull" id="listItem">
           <div class="innerObjectFull">
               <p>${items[i].title}</p>
               <p>${items[i].rating}</p> 
               <form class="delete" id="delete">
                   <button class=deleteButton>Delete</button>
               </form>
           </div>
           <div class="innerObjectFull">
               <a href="${items[i].url}">Link</a> 
               
           </div>
           <div class="innerObjectFull">
               <p>${items[i].description}</p>
           </div>
           <form class="expand" id="expand">
                   <button class=expandButton>Expand</button>
            </form>
       </div>`
    )
}

export default{
    generateHTML,
    generateInputArea,
    headerUi,
    bookmarksUi,
    bookmarksExpandedUi,
}