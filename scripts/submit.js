import store from "../scripts/store.js"

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
        addItem(name, link, description, rating)
        console.log(store.store.bookmarks)
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

export default{
    handleNewItemSubmit,

}