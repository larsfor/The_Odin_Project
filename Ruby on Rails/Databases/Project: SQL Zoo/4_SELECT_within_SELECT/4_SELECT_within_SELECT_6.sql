SELECT name
FROM world
WHERE gdp > ALL(SELECT gdp
                 FROM world
                 WHERE gdp>0 AND continent = 'Europe')