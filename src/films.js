import { movies } from "../src/data.js"

// ----------------------------------------------------------------------------------------------------
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(film => film.director);

  return result;
}
getAllDirectors(movies);
// console.log("EXERCICE 1 ->", getAllDirectors(movies));


// ----------------------------------------------------------------------------------------------------
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, directorName) {
  const result = array.filter( movie => movie.director === directorName);

  return result;
}
getMoviesFromDirector(movies, "Steven Spielberg")
// console.log("EXERCICE 2 ->", getMoviesFromDirector(movies, "Steven Spielberg"));


// ----------------------------------------------------------------------------------------------------
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(arrayMovies, directorName) {
  const movies = arrayMovies.filter(movie => movie.director === directorName);
  const totalScore = movies.reduce((acc, movie) => acc += movie.score, 0);
  const averageScore = totalScore / movies.length;
  const roundedAverage = Number.isInteger(averageScore) 
    ? parseFloat(averageScore) 
    : parseFloat(averageScore.toFixed(2))
  
  return roundedAverage;
}
moviesAverageOfDirector(movies, "Steven Spielberg");
// console.log("EXERCICE 3 ->", moviesAverageOfDirector(movies, "Steven Spielberg"));


// ----------------------------------------------------------------------------------------------------
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const filmsByTitle = array
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20)
  
  return filmsByTitle
}
orderAlphabetically(movies);
// console.log("EXERCICE 4 ->",orderAlphabetically(movies));


// ----------------------------------------------------------------------------------------------------
// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const filmsByYear = array.slice()
   filmsByYear.sort((a, b) => {
    return a.year !== b.year 
      ? a.year - b.year
      : a.title.localeCompare(b.title)
  })
  return filmsByYear;
}
orderByYear(movies)
// console.log("EXERCICE 5 ->",orderByYear(movies))


// ----------------------------------------------------------------------------------------------------
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genreFind ) {
  if(array.length === 0) return 0;
  
  const category = array.filter( movie => 
    movie.genre.some(g => g.toLowerCase() === genreFind.toLowerCase())
  );
  if(category.length === 0) return 0;
  
  const score = category.reduce((acc, movie) => acc += movie.score ,0);
  const average = score/category.length
  const scoreAverage = Number.isInteger(average) 
    ? average 
    : average.toFixed(2);
  
  return Number(scoreAverage);
}
moviesAverageByCategory(movies, "Drama");
// console.log("EXERCICE 6 ->",moviesAverageByCategory(movies, "Drama"));


// ----------------------------------------------------------------------------------------------------
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const films = array.map( film => {
    let durationInMinutes = 0;

    if(film.duration.includes("h")){
      const timeArray = film.duration.split(" ", 2);

      const hours = timeArray[0].replace("h", "");
      const minutes = timeArray[1] 
        ? timeArray[1].replace("min", "") 
        : 0;

      durationInMinutes = (Number(hours) * 60) + Number(minutes);
    } else {
      durationInMinutes = Number(film.duration.replace("min", ""));
    }

    return { ...film, duration: durationInMinutes };
  });
  return films;
}
hoursToMinutes(movies)
// console.log("EXERCICE 7 ->",hoursToMinutes(movies))


// ----------------------------------------------------------------------------------------------------
// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const filmsOfTheYear = array.filter(film => film.year === year);
  if(filmsOfTheYear.length === 0) return [];

  const bestFilm = filmsOfTheYear.reduce((acc, n) => {
    return acc.score > n.score
      ? acc 
      : n;
      
  }, filmsOfTheYear[0])

  return [bestFilm];
}
bestFilmOfYear(movies, 2000);
// console.log("EXERCICE 8 ->",bestFilmOfYear(movies, 2001));


// ----------------------------------------------------------------------------------------------------

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
