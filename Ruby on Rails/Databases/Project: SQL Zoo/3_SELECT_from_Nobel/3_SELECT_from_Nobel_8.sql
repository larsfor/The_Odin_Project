SELECT yr, subject, winner
FROM nobel
WHERE subject LIKE 'Physics' AND yr LIKE 1980
OR subject LIKE 'Chemistry' AND yr LIKE 1984 