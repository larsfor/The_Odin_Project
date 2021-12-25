SELECT matchid, mdate, COUNT(*)
FROM game JOIN goal ON (id=matchid)
AND (teamid='GER')
GROUP BY matchid, mdate