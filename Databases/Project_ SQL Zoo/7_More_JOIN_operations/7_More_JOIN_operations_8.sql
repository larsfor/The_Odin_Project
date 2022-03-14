SELECT title FROM movie 
JOIN casting ON (casting.movieid=movie.id)
JOIN actor ON (actor.id=casting.actorid)
WHERE name LIKE 'Harrison Ford'