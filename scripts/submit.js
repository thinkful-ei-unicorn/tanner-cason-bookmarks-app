import store from "../scripts/store.js"
import app from "../scripts/app.js"
import api from "../scripts/api.js"


function handleNewItemSubmit(){
    $('.inputForm').submit(function(event){
        event.preventDefault();
        console.log('submitting')
        
        let newItem = { 
            "title": $(event.currentTarget).find('#name').val(),
            "url": $(event.currentTarget).find('#link').val(),
            "desc": $(event.currentTarget).find('#description').val(),
            "rating": $(event.currentTarget).find('#rating').val(),
            "expanded": false
            }
        
        
        api.addBookmark(newItem, onSuccessCreate)
        
       
    })
}

function onSuccessCreate(newItem){
    store.addToStore(newItem);
    app.render();
    $('.inputForm')[0].reset();
    
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
    $('.bookmarkArea').on('click', '.deleteButton', function (event){
        event.preventDefault();
        console.log($(event.currentTarget).data("bookmark-id"))

        let bookmarkId = $(event.currentTarget).data("bookmark-id");

        
        store.deleteBookmark(bookmarkId);
        api.deleteBookmark(bookmarkId)
        .then(
        app.render()
        );
    })
}

export default{
    handleNewItemSubmit,
    handleToggleExpand,
    handleDeleteClick
}