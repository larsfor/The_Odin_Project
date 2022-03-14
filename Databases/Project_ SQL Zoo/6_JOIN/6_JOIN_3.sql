SELECT player, teamid, stadium, mdate
FROM goal JOIN game ON (id = matchid)
WHERE teamid = 'GER'