SELECT matchid, mdate, COUNT(teamid)
FROM goal JOIN game ON matchid = id 
WHERE (team1 = 'POL' OR team2 = 'POL')
GROUP BY matchid, mdate