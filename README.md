# TechMart Store - MySQL & MongoDB Data Practical
By Muhammad Hussain (muhammadhussain199551@gmail.com)

A complete data-entry practical: a raw messy customer file was cleaned and verified,
entered into MySQL and MongoDB, and reported from both - with identical results.

## Files in this repository
1. `dashboard.html` - visual summary page (download and open in a browser)
2. `TechMart_Data_Practical.xlsx` - Excel workbook: raw data, data cleaning log, clean tables, sales report
3. `01_mysql_practical.sql` - MySQL: tables with primary/foreign keys, data entry (INSERT),
   verification queries (duplicates, missing values), JOIN and GROUP BY reports
4. `02_mongodb_practical.js` - MongoDB: documents, search/update queries, aggregation pipelines
5. `SHOW_THIS_GUIDE.pdf` - project explanation guide

The raw and cleaned customer data is inside the Excel workbook (Raw_Data_Unclean and
Customers_Clean sheets) and inside the SQL / MongoDB scripts as INSERT / insertMany data.

## Key results (same in MySQL, MongoDB and Excel)
- Customers: 12 (cleaned from 15 raw rows - 2 duplicates + 1 invalid row removed)
- Orders: 16 (13 delivered, 2 pending, 1 cancelled)
- Total sales (excluding cancelled): Rs 195,700
- Best city: Lahore | Best product: Monitor 24 inch

## How to run
- MySQL Workbench: open `01_mysql_practical.sql` and Execute.
- MongoDB: open mongosh, paste `02_mongodb_practical.js` step by step.
