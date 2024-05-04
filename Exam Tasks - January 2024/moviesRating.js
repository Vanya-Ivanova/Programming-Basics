function moviesRating(input) {
    let countMovies = Number(input[0]);

    let lowestRating = 10;
    let movieWithLowestRating = "";

    let highestRating = 0;
    let movieWithHighestRating = "";

    let ratingSum = 0;

    for (let index = 1; index <= countMovies * 2; index += 2) {
        let currentMovieName = input[index];

        let currentMovieRating = Number(input[index + 1]);

        if (currentMovieRating > highestRating) {
            highestRating = currentMovieRating;
            movieWithHighestRating = currentMovieName;
        }

        if (currentMovieRating < lowestRating) {
            lowestRating = currentMovieRating;
            movieWithLowestRating = currentMovieName;

        }
        
        ratingSum += currentMovieRating;
    }

    let avgRating = ratingSum / countMovies;

    console.log(`${movieWithHighestRating} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${movieWithLowestRating} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);
}



moviesRating(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
moviesRating(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);