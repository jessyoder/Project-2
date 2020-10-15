-- Drop table if exists
DROP TABLE a2010;

-- Create new table
CREATE TABLE a2010 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_10 INT,
	Total_Barrels_10 DEC,
	Taxable_Removals_10 DEC,
	Total_Shipped_10 DEC
);

SELECT * FROM a2010;

-- Drop table if exists
DROP TABLE b2011;

-- Create new table
CREATE TABLE b2011 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_11 INT,
	Total_Barrels_11 DEC,
	Taxable_Removals_11 DEC,
	Total_Shipped_11 DEC
);

SELECT * FROM b2011;

-- Drop table if exists
DROP TABLE c2012;

-- Create new table
CREATE TABLE c2012 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_12 INT,
	Total_Barrels_12 DEC,
	Taxable_Removals_12 DEC,
	Total_Shipped_12 DEC
);

SELECT * FROM c2012;

-- Drop table if exists
DROP TABLE d2013;

-- Create new table
CREATE TABLE d2013 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_13 INT,
	Total_Barrels_13 DEC,
	Taxable_Removals_13 DEC,
	Total_Shipped_13 DEC
);

SELECT * FROM d2013;

-- Drop table if exists
DROP TABLE e2014;

-- Create new table
CREATE TABLE e2014 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_14 INT,
	Total_Barrels_14 DEC,
	Taxable_Removals_14 DEC,
	Total_Shipped_14 DEC
);

SELECT * FROM e2014;

-- Drop table if exists
DROP TABLE f2015;

-- Create new table
CREATE TABLE f2015 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_15 INT,
	Total_Barrels_15 DEC,
	Taxable_Removals_15 DEC,
	Total_Shipped_15 DEC
);

SELECT * FROM f2015;

-- Drop table if exists
DROP TABLE g2016;

-- Create new table
CREATE TABLE g2016 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_16 INT,
	Total_Barrels_16 DEC,
	Taxable_Removals_16 DEC,
	Total_Shipped_16 DEC
);

SELECT * FROM g2016;

-- Drop table if exists
DROP TABLE h2017;

-- Create new table
CREATE TABLE h2017 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_17 INT,
	Total_Barrels_17 DEC,
	Taxable_Removals_17 DEC,
	Total_Shipped_17 DEC
);

SELECT * FROM h2017;

-- Drop table if exists
DROP TABLE i2018;

-- Create new table
CREATE TABLE i2018 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_18 INT,
	Total_Barrels_18 DEC,
	Taxable_Removals_18 DEC,
	Total_Shipped_18 DEC
);

SELECT * FROM i2018;

-- Drop table if exists
DROP TABLE j2019;

-- Create new table
CREATE TABLE j2019 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries_19 INT,
	Total_Barrels_19 DEC,
	Taxable_Removals_19 DEC,
	Total_Shipped_19 DEC
);

SELECT * FROM j2019;

-- Drop table if exists
DROP TABLE breweries_merged;

-- Create new table
CREATE TABLE breweries_merged AS
	SELECT a.Barrels_31Gallons, a.Number_of_Breweries_10, b.Number_of_Breweries_11, c.Number_of_Breweries_12, d.Number_of_Breweries_13, e.Number_of_Breweries_14, f.Number_of_Breweries_15, g.Number_of_Breweries_16, h.Number_of_Breweries_17, i.Number_of_Breweries_18, j.Number_of_Breweries_19
	FROM a2010 AS a 
	INNER JOIN b2011 AS b ON a.Barrels_31Gallons = b.Barrels_31Gallons
	INNER JOIN c2012 AS c ON a.Barrels_31Gallons = c.Barrels_31Gallons
	INNER JOIN d2013 AS d ON a.Barrels_31Gallons = d.Barrels_31Gallons
	INNER JOIN e2014 AS e ON a.Barrels_31Gallons = e.Barrels_31Gallons
	INNER JOIN f2015 AS f ON a.Barrels_31Gallons = f.Barrels_31Gallons
	INNER JOIN g2016 AS g ON a.Barrels_31Gallons = g.Barrels_31Gallons
	INNER JOIN h2017 AS h ON a.Barrels_31Gallons = h.Barrels_31Gallons
	INNER JOIN i2018 AS i ON a.Barrels_31Gallons = i.Barrels_31Gallons
	INNER JOIN j2019 AS j ON a.Barrels_31Gallons = j.Barrels_31Gallons;
	
SELECT * from breweries_merged

-- Drop table if exists
DROP TABLE total_barrels_merged;

-- Create new table
CREATE TABLE total_barrels_merged AS
	SELECT a.Barrels_31Gallons, a.Total_Barrels_10, b.Total_Barrels_11, c.Total_Barrels_12, d.Total_Barrels_13, e.Total_Barrels_14, f.Total_Barrels_15, g.Total_Barrels_16, h.Total_Barrels_17, i.Total_Barrels_18, j.Total_Barrels_19
	FROM a2010 AS a 
	INNER JOIN b2011 AS b ON a.Barrels_31Gallons = b.Barrels_31Gallons
	INNER JOIN c2012 AS c ON a.Barrels_31Gallons = c.Barrels_31Gallons
	INNER JOIN d2013 AS d ON a.Barrels_31Gallons = d.Barrels_31Gallons
	INNER JOIN e2014 AS e ON a.Barrels_31Gallons = e.Barrels_31Gallons
	INNER JOIN f2015 AS f ON a.Barrels_31Gallons = f.Barrels_31Gallons
	INNER JOIN g2016 AS g ON a.Barrels_31Gallons = g.Barrels_31Gallons
	INNER JOIN h2017 AS h ON a.Barrels_31Gallons = h.Barrels_31Gallons
	INNER JOIN i2018 AS i ON a.Barrels_31Gallons = i.Barrels_31Gallons
	INNER JOIN j2019 AS j ON a.Barrels_31Gallons = j.Barrels_31Gallons;
	
SELECT * FROM total_barrels_merged;

-- Drop table if exists
DROP TABLE total_shipped_merged;

-- Create new table
CREATE TABLE total_shipped_merged AS
	SELECT a.Barrels_31Gallons, a.Total_Shipped_10, b.Total_Shipped_11, c.Total_Shipped_12, d.Total_Shipped_13, e.Total_Shipped_14, f.Total_Shipped_15, g.Total_Shipped_16, h.Total_Shipped_17, i.Total_Shipped_18, j.Total_Shipped_19
	FROM a2010 AS a 
	INNER JOIN b2011 AS b ON a.Barrels_31Gallons = b.Barrels_31Gallons
	INNER JOIN c2012 AS c ON a.Barrels_31Gallons = c.Barrels_31Gallons
	INNER JOIN d2013 AS d ON a.Barrels_31Gallons = d.Barrels_31Gallons
	INNER JOIN e2014 AS e ON a.Barrels_31Gallons = e.Barrels_31Gallons
	INNER JOIN f2015 AS f ON a.Barrels_31Gallons = f.Barrels_31Gallons
	INNER JOIN g2016 AS g ON a.Barrels_31Gallons = g.Barrels_31Gallons
	INNER JOIN h2017 AS h ON a.Barrels_31Gallons = h.Barrels_31Gallons
	INNER JOIN i2018 AS i ON a.Barrels_31Gallons = i.Barrels_31Gallons
	INNER JOIN j2019 AS j ON a.Barrels_31Gallons = j.Barrels_31Gallons;

SELECT * FROM total_shipped_merged;
	

