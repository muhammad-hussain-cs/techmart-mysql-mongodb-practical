-- ============================================================
-- TechMart Store - Customer & Orders Data Practical
-- Tool: MySQL (run in MySQL Workbench or MySQL command line)
-- By: Muhammad Hussain
-- What this file shows:
--   1. Creating a database and tables (PRIMARY KEY / FOREIGN KEY)
--   2. Entering data (INSERT)
--   3. Verifying data: duplicates, missing values, errors
--   4. Updating and correcting records
--   5. Reports: JOIN, GROUP BY, ORDER BY, SUM, COUNT
-- ============================================================

DROP DATABASE IF EXISTS techmart_store;
CREATE DATABASE techmart_store;
USE techmart_store;

-- ---------- STEP 1: CREATE TABLES ----------
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name   VARCHAR(100) NOT NULL,
    city        VARCHAR(50)  NOT NULL,
    email       VARCHAR(100) UNIQUE,
    phone       VARCHAR(15),
    join_date   DATE
);

CREATE TABLE products (
    product_id   INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category     VARCHAR(50),
    price        INT NOT NULL CHECK (price > 0),
    stock        INT NOT NULL DEFAULT 0
);

CREATE TABLE orders (
    order_id    INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    product_id  INT NOT NULL,
    quantity    INT NOT NULL CHECK (quantity > 0),
    order_date  DATE,
    status      VARCHAR(20) DEFAULT 'Delivered',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (product_id)  REFERENCES products(product_id)
);

-- ---------- STEP 2: ENTER DATA ----------
INSERT INTO customers (customer_id, full_name, city, email, phone, join_date) VALUES
(1, 'Ahmed Khan', 'Lahore', 'ahmed.khan@gmail.com', '0301-2345671', '2026-09-02'),
(2, 'Fatima Noor', 'Karachi', 'fatima.noor@gmail.com', '0321-8765432', '2026-09-05'),
(3, 'Bilal Ahmed', 'Lahore', 'bilal.ahmed@gmail.com', '0333-1122334', '2026-09-08'),
(4, 'Ayesha Siddiqui', 'Islamabad', 'ayesha.s@gmail.com', '0345-9988776', '2026-09-11'),
(5, 'Usman Tariq', 'Faisalabad', 'usman.tariq@gmail.com', '0300-4455667', '2026-09-14'),
(6, 'Maryam Aslam', 'Karachi', 'maryam.aslam@gmail.com', '0322-3344556', '2026-09-18'),
(7, 'Hassan Raza', 'Lahore', 'hassan.raza@gmail.com', '0312-6677889', '2026-09-21'),
(8, 'Zara Iqbal', 'Islamabad', 'zara.iqbal@gmail.com', '0334-2211009', '2026-09-25'),
(9, 'Ali Hamza', 'Multan', 'ali.hamza@gmail.com', '0308-7788990', '2026-09-28'),
(10, 'Sana Tariq', 'Karachi', 'sana.tariq@gmail.com', '0323-5566778', '2026-10-01'),
(11, 'Omar Farooq', 'Peshawar', NULL, '0309-9900112', '2026-10-03'),
(12, 'Hira Shah', 'Lahore', 'hira.shah@gmail.com', '0311-4433221', '2026-10-06');

INSERT INTO products (product_id, product_name, category, price, stock) VALUES
(1, 'Laptop Stand', 'Accessories', 2500, 40),
(2, 'Wireless Mouse', 'Accessories', 1800, 120),
(3, 'USB-C Hub', 'Accessories', 4500, 60),
(4, 'Mechanical Keyboard', 'Accessories', 7500, 35),
(5, 'Monitor 24 inch', 'Electronics', 42000, 15),
(6, 'Office Chair', 'Furniture', 18500, 20),
(7, 'Desk Lamp', 'Furniture', 3200, 50),
(8, 'External Hard Drive 1TB', 'Electronics', 14500, 25);

INSERT INTO orders (order_id, customer_id, product_id, quantity, order_date, status) VALUES
(1, 1, 2, 2, '2026-10-02', 'Delivered'),
(2, 1, 1, 1, '2026-10-02', 'Delivered'),
(3, 2, 4, 1, '2026-10-03', 'Delivered'),
(4, 3, 5, 1, '2026-10-04', 'Delivered'),
(5, 4, 6, 1, '2026-10-05', 'Delivered'),
(6, 5, 3, 2, '2026-10-06', 'Delivered'),
(7, 6, 8, 1, '2026-10-07', 'Pending'),
(8, 7, 2, 3, '2026-10-08', 'Delivered'),
(9, 8, 7, 2, '2026-10-09', 'Delivered'),
(10, 9, 1, 2, '2026-10-10', 'Delivered'),
(11, 10, 4, 1, '2026-10-11', 'Cancelled'),
(12, 11, 5, 1, '2026-10-12', 'Delivered'),
(13, 12, 3, 1, '2026-10-13', 'Delivered'),
(14, 3, 2, 1, '2026-10-14', 'Delivered'),
(15, 5, 6, 1, '2026-10-15', 'Pending'),
(16, 9, 8, 1, '2026-10-16', 'Delivered');

-- ---------- STEP 3: VERIFY THE DATA (data entry checking) ----------
-- 3a. Find duplicate emails (same customer entered twice)
SELECT email, COUNT(*) AS total FROM customers
WHERE email IS NOT NULL GROUP BY email HAVING COUNT(*) > 1;

-- 3b. Find records with a missing email (incomplete data)
SELECT customer_id, full_name, city FROM customers WHERE email IS NULL OR email = '';

-- 3c. Find orders with a wrong quantity or price problem
SELECT * FROM orders WHERE quantity <= 0;

-- 3d. Count records in every table (quick completeness check)
SELECT (SELECT COUNT(*) FROM customers) AS customers,
       (SELECT COUNT(*) FROM products)  AS products,
       (SELECT COUNT(*) FROM orders)    AS orders;

-- ---------- STEP 4: UPDATE / CORRECT A RECORD ----------
UPDATE customers SET city = 'Lahore' WHERE customer_id = 7;
UPDATE products  SET stock = stock - 1 WHERE product_id = 5;

-- ---------- STEP 5: REPORTS ----------
-- 5a. Full order report (JOIN of all 3 tables)
SELECT o.order_id, c.full_name, c.city, p.product_name, o.quantity,
       p.price, (o.quantity * p.price) AS amount, o.status
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN products  p ON o.product_id  = p.product_id
ORDER BY o.order_id;

-- 5b. Total sales (cancelled orders excluded)  -> Rs 195,700
SELECT SUM(o.quantity * p.price) AS total_sales
FROM orders o JOIN products p ON o.product_id = p.product_id
WHERE o.status <> 'Cancelled';

-- 5c. Sales by city
SELECT c.city, COUNT(o.order_id) AS orders, SUM(o.quantity * p.price) AS sales
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN products  p ON o.product_id  = p.product_id
WHERE o.status <> 'Cancelled'
GROUP BY c.city ORDER BY sales DESC;

-- 5d. Best selling products
SELECT p.product_name, SUM(o.quantity) AS units_sold, SUM(o.quantity * p.price) AS sales
FROM orders o JOIN products p ON o.product_id = p.product_id
WHERE o.status <> 'Cancelled'
GROUP BY p.product_name ORDER BY sales DESC;

-- 5e. Orders by status
SELECT status, COUNT(*) AS total FROM orders GROUP BY status;

-- 5f. Search a customer by name (data retrieval)
SELECT * FROM customers WHERE full_name LIKE '%Ahmed%';
