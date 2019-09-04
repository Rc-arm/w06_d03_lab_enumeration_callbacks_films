const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitlesList = function(){
  const filmTitles = this.films.map(function(film){
    return film.title
});
  return filmTitles;
};

Cinema.prototype.filmTitle = function(){
  const found = this.films.find(function(title){
    return title;
  })
  return found;
};

Cinema.prototype.filmGenre = function(genre){
  return this.films.filter(film => genre === film.genre);
};

Cinema.prototype.releasedInYear = function(year){
  return this.films.some(film => year === film.year);
};

Cinema.prototype.overLength = function(length){
  return this.films.every(film => length < film.length);
};

Cinema.prototype.totalRunningTimes = function(films){
  let total = this.films.reduce((runningTotal, length) => {
    return runningTotal + length;
  }, 0);
  return total;
};

module.exports = Cinema;
