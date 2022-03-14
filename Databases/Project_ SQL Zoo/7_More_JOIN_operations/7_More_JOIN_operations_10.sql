SELECT title, name FROM movie
JOIN casting ON (casting.movieid=movie.id)
JOIN actor ON (actor.id=casting.actorid)
WHERE ord LIKE 1 AND yr=1962
