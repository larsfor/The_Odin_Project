SELECT subject, ROUND(SUM(response*A_STRONGLY_AGREE)/SUM(response))
  FROM nss
 WHERE question='Q22'
   AND (subject='(8) Computer Science' OR subject='(H) Creative Arts and Design')
GROUP BY subject