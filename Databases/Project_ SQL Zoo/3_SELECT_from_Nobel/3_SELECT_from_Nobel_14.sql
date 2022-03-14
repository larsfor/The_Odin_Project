SELECT winner, subject
FROM nobel
WHERE yr=1984
ORDER BY subject IN ('Chemistry','Physics'), subject, winner