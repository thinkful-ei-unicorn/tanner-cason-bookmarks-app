import store from "../scripts/store.js"
import app from "../scripts/app.js"
import api from "../scripts/api.js"


let baseURL = 'https://thinkful-list-api.herokuapp.com/tanner'

function handleNewItemSubmit(){
    $('.inputForm').submit(function(event){
        event.preventDefault();
        console.log('submitting')
        let name = $(event.currentTarget).find('#name').val()
        let link = $(event.currentTarget).find('#link').val()
        let description = $(event.currentTarget).find('#description').val()
        let rating = $(event.currentTarget).find('#rating').val()
        console.log(name)
        console.log(link)
        console.log(description)
        console.log(rating)
        let newItem = JSON.stringify({ 
            "title": $(event.currentTarget).find('#name').val(),
            "url": $(event.currentTarget).find('#link').val(),
            "desc": $(event.currentTarget).find('#description').val(),
            "rating": $(event.currentTarget).find('#rating').val(),
            "expanded": false
            })
        

        //addItem(name, link, description, rating);
        api.addBookmark(newItem);
        console.log(store.store.bookmarks);
        app.render();
    })
}

function addItem(name, link, desc, rate){
    store.store.bookmarks.push({
        
        title: name,
        rating: rate,
        url: link,
        description: desc,
        expanded: false
})
}

function handleToggleExpand(){
    
    $('.listItem').on('click', '.expandButton', function (event){
        event.preventDefault();
        console.log('toggled')
        let ex = $(event.currentTarget).data('listItem');
        store.toggleIsExpanded(ex)
    })
}

export default{
    handleNewItemSubmit,
    handleToggleExpand
}