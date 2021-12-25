SELECT institution, score
  FROM nss
 WHERE question='Q15'
   AND subject='(8) Computer Science'
   AND score < 50