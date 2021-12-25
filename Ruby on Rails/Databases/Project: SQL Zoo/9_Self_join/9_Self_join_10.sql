SELECT DISTINCT a.num, a.company, (SELECT name FROM stops WHERE id = b.stop) stopname, bus2.num, bus2.company
FROM route a
JOIN route b ON (a.company = b.company) AND (a.num = b.num) 
AND a.stop = (SELECT id FROM stops WHERE name = 'Craiglockhart')
JOIN (
  SELECT c.stop stop1, d.num, d.company 
  FROM route c 
  JOIN route d ON (c.company = d.company) AND (c.num = d.num)
  AND d.stop = (SELECT id FROM stops WHERE name = 'Lochend')) bus2
ON b.stop = bus2.stop1
ORDER BY a.num, stopname, bus2.num;
