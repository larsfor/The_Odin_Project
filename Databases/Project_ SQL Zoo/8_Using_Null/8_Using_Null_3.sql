SELECT teacher.name, dept.name
FROM teacher LEFT JOIN dept ON (dept.id=teacher.dept)