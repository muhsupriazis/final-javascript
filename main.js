function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]

    const result = []

    for(let i = 0; i < favoriteGenre.length; i++){
        movies.forEach(movie => {
            if(movie.genre == favoriteGenre[i]){
                let items = {
                    id: movie.id,
                    name: movie.name,
                    gendre: movie.genre,
                    soldTicket: movie.soldTicket,
                    capacity: movie.capacity
                }
                result.push(items)
            }
        });
    }


    return result
}

function findTicketAvailability(movie, user) {

    const isAvailable = (movie.capacity - movie.soldTicket) >= user.ticket

    return isAvailable

}

function findRecommendation(user) {
    const favoriteGenre = user.favoriteGenre
    const movies = findMovies(favoriteGenre)
    if(movies.length < 1){
        return `Tidak ada film yang sesuai kriteria`
    }

    let recommendationMovie = []

    movies.forEach(movie => {
        const isAvailable = findTicketAvailability(movie, user)
        if(isAvailable){
            recommendationMovie.push(movie)
        }
    });


    return recommendationMovie
}


function generateRecommendation(user) {
    const movies = findRecommendation(user)

    if(typeof(movies) == 'string' ){
        return `Tidak ada film yang sesuai kriteria`
    }

    let price = [['Action', 100000],['Musical',80000], ['Romance', 40000], ['Horror', 75000]]

    let recommendationMovies = []

    movies.forEach(movie => {
        for(let i = 0; i < price.length; i++){
            if(movie.gendre == price[i][0]){
                let moviePrice = price[i][1]
                let totalPrice = user.ticket * moviePrice
                
                let items = {
                    id: movie.id,
                    name: movie.name,
                    genre: movie.gendre,
                    totalPrice
                }
                recommendationMovies.push(items)
            }
        }
    });

    return recommendationMovies
}


let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))


module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}
