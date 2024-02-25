use easytradez
;WITH CTE AS(
SELECT L.ScripName ,(L.LTP * 1.0) /100 AS FutureLTP ,T.nClosingRate AS FuturePrevLTP , COALESCE(L.LTP * 1.0 /100 ,0) - T.nClosingRate AS FutureLTPChange,
L.OI AS FutureOI , T.sField1 AS PrevOI , COALESCE(L.OI - T.sField1,0) AS OIChange

, L.Expiry ,
L.FeedUpdateTime
  FROM LiveFeeds AS L WITH(NOLOCK) LEFT OUTER JOIN TempBhavcopy AS T WITH (NOLOCK) ON rtrim(ltrim(L.ScripName)) = rtrim(ltrim(T.sScript))
WHERE L.SCP = 'XX' AND Instrument = 'FUTSTK' AND CONVERT(date,L.Expiry,102) = T.dExpiryDate AND T.sCP = 'X' AND L.Instrument = T.sCashType
)
select * from cte order by ScripName
