SELECT name, REPLACE(capital, name, '') AS extension
FROM world
WHERE capital LIKE concat(name, '_%')