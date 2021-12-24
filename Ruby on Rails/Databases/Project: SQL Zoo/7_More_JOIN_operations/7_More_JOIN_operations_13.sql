SELECT name FROM actor
JOIN casting ON (actor.id=casting.actorid)
WHERE ord = 1
GROUP BY name
HAVING COUNT(*) >= 15
ORDER BY name