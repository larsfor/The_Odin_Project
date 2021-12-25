SELECT constituency, party
 FROM ge
 WHERE constituency BETWEEN 'S14000021' AND 'S14000026'
 AND yr  = 2017
 AND votes IN (SELECT MAX(votes) from ge 
              WHERE yr=2017 
              AND constituency BETWEEN 'S14000021' AND 'S14000026'
              GROUP BY constituency)
ORDER BY constituency,votes DESC
