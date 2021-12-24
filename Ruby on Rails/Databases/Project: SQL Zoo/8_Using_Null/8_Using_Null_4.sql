SELECT teacher.name, dept.name 
FROM teacher RIGHT JOIN dept ON (dept.id=teacher.dept) 