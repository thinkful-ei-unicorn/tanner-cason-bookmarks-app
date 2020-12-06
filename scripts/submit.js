import store from "../scripts/store.js"
import app from "../scripts/app.js"
import api from "../scripts/api.js"


let baseURL = 'https://thinkful-list-api.herokuapp.com/tanner'

function handleNewItemSubmit(){
    $('.inputForm').submit(function(event){
        event.preventDefault();
        console.log('submitting')
        
        let newItem = JSON.stringify({ 
            "title": $(event.currentTarget).find('#name').val(),
            "url": $(event.currentTarget).find('#link').val(),
            "desc": $(event.currentTarget).find('#description').val(),
            "rating": $(event.currentTarget).find('#rating').val(),
            "expanded": false
            })
        

        
        api.addBookmark(newItem)
        .then(app.main())
        console.log(store.store.bookmarks);
        //app.render()
    })
}



function handleToggleExpand(){
    
    $('.bookmarkArea').on('click', '.listItem', function (event){
        event.preventDefault();
        console.log('toggled')
        let ex = $(event.currentTarget).data("bookmark-id");
        store.toggleIsExpanded(ex)
        console.log(ex)
        app.render()
    })

    $('.bookmarkArea').on('click', '.innerObjectFull', function (event){
        event.preventDefault();
        console.log('toggled')
        let ex = $(event.currentTarget).data("bookmark-id");
        store.toggleIsExpanded(ex)
        console.log(ex)
        app.render()
    })
}

function handleDeleteClick(){
    $('.inputAreaFull').click('.deleteButton', function (event){
        event.preventDefault();
        console.log(Deleted)
    })
}

export default{
    handleNewItemSubmit,
    handleToggleExpand,
    handleDeleteClick
}