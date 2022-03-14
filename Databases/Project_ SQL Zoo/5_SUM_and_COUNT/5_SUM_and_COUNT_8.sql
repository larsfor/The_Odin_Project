SELECT DISTINCT continent
FROM world x
WHERE 100000000 <=
(SELECT SUM(population)
FROM world y
WHERE x.continent = y.continent
GROUP BY continent);