SELECT name, CONCAT(ROUND(population/(SELECT population FROM world WHERE name = 'Germany')*100), '%') AS percentage
FROM world
WHERE continent = 'Europe'