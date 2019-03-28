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
                console.log(result)
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

        $.get("https://pokeapi.co/api/v2/pokemon/1",
            (result) => {
                console.log(result)
            }
        );


        
        // $.get("https://quotes.rest/qod", 
        //         (quotes) => {
        //         this.data.quotes = quotes
        //         console.log(quotes)
        //     }
        // );

        // $.get("https://baconipsum.com/api/?type=meat-and-filler"),
        // (bacons) => {
        //     this.data.bacons = bacons

        // }
    }
}




