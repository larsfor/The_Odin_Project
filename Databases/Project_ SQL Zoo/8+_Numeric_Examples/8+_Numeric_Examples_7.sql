SELECT institution, ROUND(SUM(response*score)/SUM(response)) AS score
  FROM nss
 WHERE question='Q22'
   AND (institution LIKE '%Manchester%')
GROUP BY institution
ORDER BY institution