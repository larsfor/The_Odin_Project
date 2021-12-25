SET @@sql_mode='ANSI';
SELECT name, date_format(whn, '%Y-%m-%d'), peakNewCases
FROM(SELECT name, whn, peakNewCases, confirmed, 
     RANK() OVER(PARTITION BY name ORDER BY peakNewCases desc) as rank
     FROM(SELECT name, whn, confirmed,
           confirmed - LAG(confirmed,1) OVER(partition by name order by whn) AS peakNewCases
           FROM covid) AS  test
     where peakNewCases > 1000) as more
where rank = 1
order by whn;