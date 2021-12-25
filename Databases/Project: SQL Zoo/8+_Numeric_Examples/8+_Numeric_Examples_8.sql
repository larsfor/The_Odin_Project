SELECT institution, SUM(sample), 
  (SELECT sample FROM nss y 
  WHERE subject LIKE '%comp%'
  AND x.institution=y.institution
  AND question='Q01') AS comp
  FROM nss x
 WHERE question='Q01'
   AND (institution LIKE '%Manchester%')
GROUP BY institution