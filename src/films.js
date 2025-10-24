import { movies } from "../src/data.js"

// --------------------------------------------------
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(film => film.director);

  // console.log("EXERCICE 1 ->", result);
  return result;
}

getAllDirectors(movies);

// --------------------------------------------------
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, directorName) {
  const result = array.filter( movie => movie.director === directorName);

  // console.log("EXERCICE 2 ->", result);
  return result;
}

getMoviesFromDirector(movies, "Steven Spielberg")

// --------------------------------------------------
// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(arrayMovies, directorName) {
  const movies = arrayMovies.filter(movie => movie.director === directorName);

  const totalScore = movies.reduce((acc, movie) => acc += movie.score, 0);
  const averageScore = totalScore / movies.length;
  const roundedAverage = Number.isInteger(averageScore) 
    ? parseFloat(averageScore) 
    : parseFloat(averageScore.toFixed(2))
  
  // console.log("EXERCICE 3 ->", roundedAverage);
  return roundedAverage;
}

moviesAverageOfDirector(movies, "Steven Spielberg");

// --------------------------------------------------
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const filmsByTitle = array
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20)
  
  console.log(filmsByTitle);
  return filmsByTitle
}
orderAlphabetically(movies)
// --------------------------------------------------
// Exercise 5: Order by year, ascending
function orderByYear() {

}

// --------------------------------------------------
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// --------------------------------------------------
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// --------------------------------------------------
// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}

// --------------------------------------------------

export {
  getAllDirectors,
  getMoviesFromDirector,
  moviesAverageOfDirector,
  orderAlphabetically,
  orderByYear,
  moviesAverageByCategory,
  hoursToMinutes,
  bestFilmOfYear,
};

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
/*
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
*/
