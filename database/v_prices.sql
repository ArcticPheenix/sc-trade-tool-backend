CREATE VIEW v_prices
AS
SELECT
  commodities.name AS "commodity",
  commodities.type AS "type",
  locations.name AS "location",
  buy_price,
  sell_price
FROM `commodity_prices`
INNER JOIN commodities ON commodities.cid = commodity_prices.fk_cid
INNER JOIN locations on locations.lid = commodity_prices.fk_lid;