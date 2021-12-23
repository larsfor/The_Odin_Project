SELECT name, capital
FROM world
WHERE LEFT(name, 1) LIKE LEFT(capital, 1)
AND name <> capital