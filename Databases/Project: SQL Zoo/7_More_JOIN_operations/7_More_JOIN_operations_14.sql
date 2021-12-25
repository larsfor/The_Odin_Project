SELECT DISTINCT title, COUNT(actorid) FROM movie 
JOIN casting ON (casting.movieid=movie.id)
Where yr=1978
GROUP BY title
ORDER BY COUNT(actorid) DESC, title 