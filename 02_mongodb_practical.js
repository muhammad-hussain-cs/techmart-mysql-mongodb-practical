// ============================================================
// TechMart Store - SAME data in MongoDB (NoSQL / document database)
// Tool: MongoDB (run in mongosh or MongoDB Compass)
// By: Muhammad Hussain
// Idea: in MySQL the data is split into 3 linked tables.
// In MongoDB each customer is ONE document, and his orders are
// stored INSIDE the document as an array. No JOIN is needed.
// ============================================================

use techmart_store

// ---------- STEP 1: INSERT DOCUMENTS ----------
db.customers.drop()
db.customers.insertMany(
[
  {
    "_id": 1,
    "full_name": "Ahmed Khan",
    "city": "Lahore",
    "email": "ahmed.khan@gmail.com",
    "phone": "0301-2345671",
    "join_date": "2026-09-02",
    "orders": [
      {
        "product": "Wireless Mouse",
        "category": "Accessories",
        "price": 1800,
        "quantity": 2,
        "amount": 3600,
        "date": "2026-10-02",
        "status": "Delivered"
      },
      {
        "product": "Laptop Stand",
        "category": "Accessories",
        "price": 2500,
        "quantity": 1,
        "amount": 2500,
        "date": "2026-10-02",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 2,
    "full_name": "Fatima Noor",
    "city": "Karachi",
    "email": "fatima.noor@gmail.com",
    "phone": "0321-8765432",
    "join_date": "2026-09-05",
    "orders": [
      {
        "product": "Mechanical Keyboard",
        "category": "Accessories",
        "price": 7500,
        "quantity": 1,
        "amount": 7500,
        "date": "2026-10-03",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 3,
    "full_name": "Bilal Ahmed",
    "city": "Lahore",
    "email": "bilal.ahmed@gmail.com",
    "phone": "0333-1122334",
    "join_date": "2026-09-08",
    "orders": [
      {
        "product": "Monitor 24 inch",
        "category": "Electronics",
        "price": 42000,
        "quantity": 1,
        "amount": 42000,
        "date": "2026-10-04",
        "status": "Delivered"
      },
      {
        "product": "Wireless Mouse",
        "category": "Accessories",
        "price": 1800,
        "quantity": 1,
        "amount": 1800,
        "date": "2026-10-14",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 4,
    "full_name": "Ayesha Siddiqui",
    "city": "Islamabad",
    "email": "ayesha.s@gmail.com",
    "phone": "0345-9988776",
    "join_date": "2026-09-11",
    "orders": [
      {
        "product": "Office Chair",
        "category": "Furniture",
        "price": 18500,
        "quantity": 1,
        "amount": 18500,
        "date": "2026-10-05",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 5,
    "full_name": "Usman Tariq",
    "city": "Faisalabad",
    "email": "usman.tariq@gmail.com",
    "phone": "0300-4455667",
    "join_date": "2026-09-14",
    "orders": [
      {
        "product": "USB-C Hub",
        "category": "Accessories",
        "price": 4500,
        "quantity": 2,
        "amount": 9000,
        "date": "2026-10-06",
        "status": "Delivered"
      },
      {
        "product": "Office Chair",
        "category": "Furniture",
        "price": 18500,
        "quantity": 1,
        "amount": 18500,
        "date": "2026-10-15",
        "status": "Pending"
      }
    ]
  },
  {
    "_id": 6,
    "full_name": "Maryam Aslam",
    "city": "Karachi",
    "email": "maryam.aslam@gmail.com",
    "phone": "0322-3344556",
    "join_date": "2026-09-18",
    "orders": [
      {
        "product": "External Hard Drive 1TB",
        "category": "Electronics",
        "price": 14500,
        "quantity": 1,
        "amount": 14500,
        "date": "2026-10-07",
        "status": "Pending"
      }
    ]
  },
  {
    "_id": 7,
    "full_name": "Hassan Raza",
    "city": "Lahore",
    "email": "hassan.raza@gmail.com",
    "phone": "0312-6677889",
    "join_date": "2026-09-21",
    "orders": [
      {
        "product": "Wireless Mouse",
        "category": "Accessories",
        "price": 1800,
        "quantity": 3,
        "amount": 5400,
        "date": "2026-10-08",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 8,
    "full_name": "Zara Iqbal",
    "city": "Islamabad",
    "email": "zara.iqbal@gmail.com",
    "phone": "0334-2211009",
    "join_date": "2026-09-25",
    "orders": [
      {
        "product": "Desk Lamp",
        "category": "Furniture",
        "price": 3200,
        "quantity": 2,
        "amount": 6400,
        "date": "2026-10-09",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 9,
    "full_name": "Ali Hamza",
    "city": "Multan",
    "email": "ali.hamza@gmail.com",
    "phone": "0308-7788990",
    "join_date": "2026-09-28",
    "orders": [
      {
        "product": "Laptop Stand",
        "category": "Accessories",
        "price": 2500,
        "quantity": 2,
        "amount": 5000,
        "date": "2026-10-10",
        "status": "Delivered"
      },
      {
        "product": "External Hard Drive 1TB",
        "category": "Electronics",
        "price": 14500,
        "quantity": 1,
        "amount": 14500,
        "date": "2026-10-16",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 10,
    "full_name": "Sana Tariq",
    "city": "Karachi",
    "email": "sana.tariq@gmail.com",
    "phone": "0323-5566778",
    "join_date": "2026-10-01",
    "orders": [
      {
        "product": "Mechanical Keyboard",
        "category": "Accessories",
        "price": 7500,
        "quantity": 1,
        "amount": 7500,
        "date": "2026-10-11",
        "status": "Cancelled"
      }
    ]
  },
  {
    "_id": 11,
    "full_name": "Omar Farooq",
    "city": "Peshawar",
    "email": null,
    "phone": "0309-9900112",
    "join_date": "2026-10-03",
    "orders": [
      {
        "product": "Monitor 24 inch",
        "category": "Electronics",
        "price": 42000,
        "quantity": 1,
        "amount": 42000,
        "date": "2026-10-12",
        "status": "Delivered"
      }
    ]
  },
  {
    "_id": 12,
    "full_name": "Hira Shah",
    "city": "Lahore",
    "email": "hira.shah@gmail.com",
    "phone": "0311-4433221",
    "join_date": "2026-10-06",
    "orders": [
      {
        "product": "USB-C Hub",
        "category": "Accessories",
        "price": 4500,
        "quantity": 1,
        "amount": 4500,
        "date": "2026-10-13",
        "status": "Delivered"
      }
    ]
  }
]
)

// ---------- STEP 2: READ / SEARCH DATA ----------
// All customers
db.customers.find()

// Customers from one city only
db.customers.find({ city: "Lahore" })

// One customer by name
db.customers.findOne({ full_name: "Ahmed Khan" })

// Records with a missing email (data verification, same check as MySQL 3b)
db.customers.find({ email: null }, { full_name: 1, city: 1, email: 1 })

// Customers who joined after 1 Oct 2026
db.customers.find({ join_date: { $gt: "2026-10-01" } })

// ---------- STEP 3: UPDATE A RECORD ----------
db.customers.updateOne(
  { full_name: "Hassan Raza" },
  { $set: { city: "Lahore" } }
)

// Add a phone tag to one customer (flexible schema - easy in MongoDB)
db.customers.updateOne(
  { full_name: "Fatima Noor" },
  { $set: { vip: true } }
)

// ---------- STEP 4: REPORTS WITH AGGREGATION ----------
// 4a. Total sales per city (MongoDB version of GROUP BY)
db.customers.aggregate([
  { $unwind: "$orders" },
  { $match: { "orders.status": { $ne: "Cancelled" } } },
  { $group: { _id: "$city", orders: { $sum: 1 }, sales: { $sum: "$orders.amount" } } },
  { $sort: { sales: -1 } }
])

// 4b. Total sales of the whole store
db.customers.aggregate([
  { $unwind: "$orders" },
  { $match: { "orders.status": { $ne: "Cancelled" } } },
  { $group: { _id: null, total_sales: { $sum: "$orders.amount" } } }
])

// 4c. Top customers by spending
db.customers.aggregate([
  { $unwind: "$orders" },
  { $match: { "orders.status": { $ne: "Cancelled" } } },
  { $group: { _id: "$full_name", spent: { $sum: "$orders.amount" } } },
  { $sort: { spent: -1 } },
  { $limit: 5 }
])

// ---------- STEP 5: COUNT / DELETE ----------
// db.customers.countDocuments({ city: "Karachi" })
// db.customers.deleteOne({ full_name: "Test User" })   // example only
