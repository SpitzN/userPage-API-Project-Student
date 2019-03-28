// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(user) {
        // $(".user-container").text("")
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(user)
        $(".user-container").append(newHTML)

    }

    _renderFriends(friends) {
        let source = $("#user-friends-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({friends})
        $(".friends-container").append(newHTML)
    }

    _renderQuote(quoteInfo) {
        let source = $("#quote-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(quoteInfo)
        $("#quote-template").append(newHTML)
    }

    _renderPokemon(pokemonInfo) {
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(pokemonInfo)
        $(".pokemon-image").append(newHTML)
    }

    _renderMeat(meatText) {
        let source = $("#meat-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(meatText)
        $(".meat-text").append(newHTML)
    }

    render(data){
        //invokes all the individual _render methods
        this._renderUsers(data.user)
        this._renderFriends(data.friends)
    }
}

