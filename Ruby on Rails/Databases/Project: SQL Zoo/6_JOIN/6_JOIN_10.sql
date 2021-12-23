SELECT stadium, COUNT(*)
FROM game JOIN goal ON (game.id=goal.matchid)
GROUP BY stadium