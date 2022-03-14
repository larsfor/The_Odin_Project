SELECT name, continent FROM world
WHERE continent =
(SELECT continent FROM world WHERE name LIKE 'Argentina')
OR continent =
(SELECT continent FROM world WHERE name LIKE 'Australia')
ORDER BY name