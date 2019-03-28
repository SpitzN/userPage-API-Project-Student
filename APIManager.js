//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {
        //you should make all your API requests here
        //each request should update the `data` object accordingly

        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: (result) => {
                this.data.user = {
                    picture: result.results[0].picture.medium,
                    first: result.results[0].name.first,
                    last: result.results[0].name.last,
                    city: result.results[0].location.city,
                    state: result.results[0].location.state
                }
                console.log(this.data.user)
                this.data.friends = result.results.map(f => { return { first: f.name.first, last: f.name.last } }).splice(1, 6)
                console.log(this.data.friends)
            }
        });

        const randomNumber = (Math.random() * 100).toFixed(0)

        $.get(`https://pokeapi.co/api/v2/pokemon/1${randomNumber}`,
            (result) => {
                this.data.pokemon = {
                    name: result.name,
                    picture: result.sprites.front_default
                }
                console.log(this.data.pokemon)
            }
        );

        $.get("https://quotes.rest/qod.json",
            result => {
                this.data.quote = {
                    quote: result.contents.quotes[0].quote,
                    author: result.contents.quotes[0].author
                }
                console.log(this.data.quote)
            }
        )

        $.get("https://baconipsum.com/api/?type=meat-and-filler",
            (result) => {
                this.data.meat = result[0]
                console.log(this.data.meat)
            })
    }
}






