SELECT name FROM actor 
JOIN casting ON (actor.id=casting.actorid)
JOIN movie ON (movie.id=casting.movieid)
WHERE movieid IN(
    SELECT movieid FROM casting 
    WHERE actorid = (
        SELECT actor.id FROM actor 
        WHERE name = 'Art Garfunkel'))
AND name NOT LIKE 'Art Garfunkel'