SELECT player
FROM goal JOIN game ON (matchid=id)
WHERE stadium LIKE 'National Stadium, Warsaw'