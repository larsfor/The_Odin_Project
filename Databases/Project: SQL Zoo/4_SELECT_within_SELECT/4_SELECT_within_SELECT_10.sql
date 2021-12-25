SELECT name, continent
FROM world x
WHERE population > ALL
(SELECT population * 3
FROM world y
WHERE x.continent = y.continent
AND x.name <> y.name);