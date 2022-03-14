SELECT team1, team2, player
FROM goal
JOIN game ON (game.id=goal.matchid)
WHERE player LIKE ('Mario%')