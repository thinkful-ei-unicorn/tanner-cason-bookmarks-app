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

function renderBookmarksUi(){
   
    const list = store.store.bookmarks.map(b => {
        console.log(b.expanded)
      if (b.expanded === false){
        return bookmarksUi(b);
    } else {
        return bookmarksExpandedUi(b);
    }
})
    
    return (`<div>${list.join(" ")}</div>`)
    
    
}

function bookmarksUi(b){
    return (
        `<div class="listItem" data-bookmark-id="${b.id}">
           <div class="innerObject">
               <p>${b.title}</p>
           </div>
           <div class="innerObject">
               <p>${b.rating}</p> 
           </div>
           
       </div>`
      )
}

function bookmarksExpandedUi(b){
    return(
        `<div class="listItemFull" data-bookmark-id="${b.id}">
           <div class="innerObjectFull" data-bookmark-id="${b.id}">
               <p>${b.title}</p>
               <p>${b.rating}</p> 
               
           </div>
           <div class="innerObjectFull">
               <a href="${b.url}">Link</a> 
               
           </div>
           <div class="innerObjectFull">
               <p>${b.desc}</p>
           </div>
           <form class="delete" id="delete">
                   <button class=deleteButton>Delete</button>
        </form>
       </div>

       `
    )
}

export default{
    generateHTML,
    generateInputArea,
    headerUi,
    renderBookmarksUi,
    bookmarksExpandedUi,
}