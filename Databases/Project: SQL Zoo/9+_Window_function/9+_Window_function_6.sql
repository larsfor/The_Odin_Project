SET @@sql_mode='ANSI';
SELECT 
   name,
   confirmed,
   RANK() OVER (ORDER BY confirmed DESC) rc,
   deaths,
   RANK() OVER (ORDER BY deaths DESC) rc
  FROM covid
WHERE whn = '2020-04-20'
GROUP BY name, confirmed, deaths
ORDER BY confirmed DESC