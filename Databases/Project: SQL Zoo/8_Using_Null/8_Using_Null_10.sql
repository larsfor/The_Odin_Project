SELECT name,
    CASE WHEN dept IN(1, 2) THEN 'Sci'
    WHEN dept LIKE 3 THEN 'Art'
    ELSE 'None'
    END
FROM teacher