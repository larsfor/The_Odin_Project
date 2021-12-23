SELECT name FROM world
WHERE GDP/population >
     (SELECT GDP/population FROM world
      WHERE name='United Kingdom')
AND continent LIKE 'Europe'