SET @@sql_mode='ANSI';
SELECT name, DAY(whn), (confirmed -
   LAG(confirmed, 1) OVER (PARTITION BY name ORDER BY whn))
 FROM covid
WHERE name = 'Italy'
AND MONTH(whn) = 3 AND YEAR(whn) = 2020
GROUP BY name, whn, confirmed
ORDER BY whn