-- Drop table if exists
DROP TABLE brew_prod_size2010;

-- Create new table
CREATE TABLE brew_prod_size2010 (
	Barrels_31Gallons VARCHAR PRIMARY KEY,
	Number_of_Breweries INT,
	Total_Barrels DEC,
	Taxable_Removals DEC,
	Total_Shipped DEC
);

SELECT * FROM brew_prod_size2010;