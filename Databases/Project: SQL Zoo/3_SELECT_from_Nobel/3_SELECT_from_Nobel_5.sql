SELECT yr, subject, winner
  FROM nobel
WHERE yr BETWEEN '1980' AND '1989'
AND subject LIKE 'Literature'