SELECT DISTINCT stopb.name, a.company, a.num 
FROM route a JOIN route b ON (a.company = b.company) AND (a.num = b.num)
JOIN stops stopa ON (a.stop = stopa.id)
JOIN stops stopb ON (b.stop = stopb.id)
WHERE stopa.name = 'Craiglockhart';