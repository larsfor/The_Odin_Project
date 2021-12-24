SELECT teacher.name, 
CASE WHEN teacher.dept IN (1, 2) THEN 'Sci'
ELSE 'Art'
END
FROM teacher