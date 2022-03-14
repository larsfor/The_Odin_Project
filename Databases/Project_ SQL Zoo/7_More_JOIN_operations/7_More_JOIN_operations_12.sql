SELECT title, name FROM movie
JOIN casting ON (casting.movieid=movie.id)
JOIN actor ON (actor.id=casting.actorid)
WHERE movie.id IN(SELECT movieid FROM casting 
WHERE actorid = (SELECT id FROM actor WHERE name='Julie Andrews'))
AND ord LIKE 1