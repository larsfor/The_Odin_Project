SELECT name FROM actor JOIN casting ON (actor.id=casting.actorid)
WHERE movieid LIKE 
(SELECT DISTINCT id FROM movie JOIN casting ON (movie.id=casting.movieid)
WHERE title LIKE 'Alien')