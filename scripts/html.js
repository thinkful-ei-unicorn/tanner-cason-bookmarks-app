import store from "../scripts/store.js"

function generateHTML(){
    $('body').html(`<header></header><section class="inputField"></section><hr><section class="bookmarkArea"></section>`)
}

function headerUi(){
    $('header').html(`<h1>Bookmarks</h1>`)
    }

function generateInputArea(){
     $('.inputField').html(
            `<div class="inputArea">
            <form class="inputForm">
            <input id="name" type="string" placeholder="Bookmark Name" required>
                <label for="name">Name</label><br>
            <input id="link" type="string" placeholder="Bookmark Link" required>
                <label for="link">Link</label><br>
            <input id="description" type="string" placeholder="description">
                <label for="description">Description</label><br>
            <select id="rating" type="" placeholder="Rating"><br> 
                <option value="">Rating</option>
                <option value=1 name="1star">1</option>
                <option value=2 name="2star">2</option>
                <option value=3 name="3star">3</option>
                <option value=4 name="4star">4</option>
                <option value=5 name="5star">5</option>
            </select><br>    
            
            <button type="submit" id="submit">Submit</button>
            </form>
            </div>
        <hr>
        <section class="filter">
                <p>Filter</p>
            <select id="filterSelect"><br> 
                <option name="1star">1</option>
                <option name="2star">2</option>
                <option name="3star">3</option>
                <option name="4star">4</option>
                <option name="5star">5</option>
            </select><br> 
        </section> `
        )
}    



function renderBookmarksUi(){
   
    const list = store.store.bookmarks.map(b => {
        console.log(b.expanded)
     if(b.rating >= store.store.filter){   
      if (b.expanded === false){
          
        return bookmarksUi(b);
    } else {
        
        return bookmarksExpandedUi(b);
    }
    }
})
    
    return (`<div class="bookmarkList">${list.join(" ")}</div>`)
    
    
}

function bookmarksUi(b){
    return (
        `<li class="listItem" data-bookmark-id="${b.id}">
           <div class="innerObject">
               <p>${b.title}</p>
           </div>
           <div class="rating">
               <p>${b.rating}</p> 
           </div>
        </li>`
      )
}

function bookmarksExpandedUi(b){
    return(
        `<li class="listItemFull" data-bookmark-id="${b.id}">
           <div class="innerObjectFull" data-bookmark-id="${b.id}">
               <p>${b.title}</p>
               <p>${b.rating}</p> 
               
           </div>
           <div class="fullLink">
               <a href="${b.url}">Link</a> 
               
           </div>
           <div class="description">
               <p>${b.desc}</p>
           </div>
           <form class="delete" type="button" id="delete" >
                   <button class=deleteButton data-bookmark-id="${b.id}">Delete</button>
            </form>
       </li>

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