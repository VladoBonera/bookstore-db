// 📖 Четене на данни (READ)
db.books.find();
db.books.find({ genre: "Science Fiction" });
db.books.find({ price: { $lt: 20 }, stock: { $gt: 0 } });

// 🔁 Обновяване на данни (UPDATE)
db.books.updateOne({ title: "1984" }, { $set: { price: 10.99 } });
db.customers.updateOne({ email: "ivan@example.com" }, { $set: { "address.street": "Bulgaria Blvd. 2" } });
db.reviews.updateOne({ rating: 4 }, { $set: { comment: "Changed opinion, it's excellent!" } });

// 🗑️ Изтриване на данни (DELETE)
db.books.deleteOne({ title: "Brave New World" });
db.customers.deleteOne({ email: "maria@example.com" });
db.reviews.deleteMany({ rating: { $lt: 3 } });

// 📊 Агрегиране (AGGREGATE)
db.books.aggregate([{ $group: { _id: "$genre", totalStock: { $sum: "$stock" } } }]);
db.reviews.aggregate([{ $group: { _id: "$book_id", avgRating: { $avg: "$rating" } } }]);
db.orders.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.book_id", totalSold: { $sum: "$items.quantity" } } },
  { $sort: { totalSold: -1 } }
]);
db.orders.aggregate([
  { $match: { total_price: { $gt: 50 } } },
  { $sort: { total_price: -1 } }
]);
