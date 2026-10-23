# TechMart Store - MySQL & MongoDB Data Practical
By Muhammad Hussain (muhammadhussain199551@gmail.com)

A complete data-entry practical: a raw messy customer file was cleaned and verified,
entered into MySQL and MongoDB, and reported from both - with identical results.

## Open these in this order when showing your work
1. `dashboard.html` - visual summary (just double-click, opens in browser)
2. `TechMart_Data_Practical.xlsx` - Excel workbook: raw data, cleaning log, clean tables, sales report
3. `01_mysql_practical.sql` - MySQL: tables, keys, INSERT, verification queries, JOIN/GROUP BY reports
4. `02_mongodb_practical.js` - MongoDB: documents, queries, updates, aggregation pipelines
5. `SHOW_THIS_GUIDE.pdf` - your speaking script + answers to likely questions (for you, not for them)

## Key results (same in MySQL, MongoDB and Excel)
- Customers: 12 (cleaned from 15 raw rows - 2 duplicates + 1 invalid row removed)
- Orders: 16 (13 delivered, 2 pending, 1 cancelled)
- Total sales (excluding cancelled): Rs 195,700
- Best city: Lahore | Best product: Monitor 24 inch

## Data folder
- `data/customers_raw_unclean.csv` - the file as received (with errors)
- `data/customers_clean.csv` - after cleaning
- `data/orders.csv` - orders export
- `data/techmart_data.json` - MongoDB documents as JSON

## How to run
- MySQL Workbench: open `01_mysql_practical.sql` and Execute.
- MongoDB: open mongosh, paste `02_mongodb_practical.js` step by step.
