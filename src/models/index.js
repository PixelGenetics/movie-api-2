const Actors = require('./Actors');
const Directors = require('./Directors');
const Genre = require("./Genres");
const Movie = require('./Movie');

Movie.belongsToMany(Actors, {through:"movieActors"});
Actors.belongsToMany(Movie, {through:"movieActors"});

Movie.belongsToMany(Directors, {through: 'moviesDirectors'});
Directors.belongsToMany(Movie, {through: 'moviesDirectors'});

Movie.belongsToMany(Genre, {through:"moviesGenres"})
Genre.belongsToMany(Movie, {through: "moviesGenres"})