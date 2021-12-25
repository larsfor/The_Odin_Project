SELECT player, teamid, coach, gtime
FROM goal JOIN eteam ON (goal.teamid=eteam.id)
WHERE gtime<=10