SELECT a.company, a.num
FROM route a JOIN route b ON (a.company=b.company) AND (a.num=b.num)
JOIN stops stopsa ON (a.stop=stopsa.id)
JOIN stops stopsb ON (b.stop=stopsb.id)
WHERE stopsa.name='Craiglockhart' AND stopsb.name='Tollcross' 