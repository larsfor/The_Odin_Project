SELECT party,count(1) 
FROM (SELECT constituency,party FROM (SELECT constituency,party, votes,RANK() over (PARTITION BY constituency ORDER BY votes desc) AS r
  FROM ge
 WHERE constituency LIKE 'S%'
   AND yr  = 2017
ORDER BY r , constituency
) AS x
WHERE x.r=1) AS y
GROUP BY party