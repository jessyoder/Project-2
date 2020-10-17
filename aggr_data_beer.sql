-- Drop table if exists
DROP TABLE aggr_data_beer;

-- Create new table
CREATE TABLE aggr_data_beer (
	State VARCHAR PRIMARY KEY, 
	y2008 DEC,
	y2009 DEC,
	y2010 DEC,
	y2011 DEC,
	y2012 DEC,
	y2013 DEC,
	y2014 DEC,
	y2015 DEC,
	y2016 DEC,
	y2017 DEC,
	y2018 DEC,
	y2019 DEC
);

-- View table columns and datatypes
SELECT * FROM aggr_data_beer;