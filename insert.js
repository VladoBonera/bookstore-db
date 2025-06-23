// Добавяне на книги
db.books.insertMany([
  {
    title: "1984",
    genre: "Dystopian",
    price: 12.99,
    stock: 100,
    author_id: ObjectId("64a1234567890abcdef12345"),
    tags: ["classic", "political"],
    published: { year: 1949, publisher: "Secker & Warburg" }
  },
  {
    title: "Brave New World",
    genre: "Science Fiction",
    price: 14.50,
    stock: 50,
    author_id: ObjectId("64a1234567890abcdef12346"),
    tags: ["future", "society"],
    published: { year: 1932, publisher: "Chatto & Windus" }
  }
]);

// Добавяне на автори
db.authors.insertMany([
  {
    _id: ObjectId("64a1234567890abcdef12345"),
    name: "George Orwell",
    birth_year: 1903,
    nationality: "British"
  },
  {
    _id: ObjectId("64a1234567890abcdef12346"),
    name: "Aldous Huxley",
    birth_year: 1894,
    nationality: "British"
  }
]);

// Добавяне на клиенти
db.customers.insertMany([
  {
    name: "Ivan Petrov",
    email: "ivan@example.com",
    address: { city: "Sofia", street: "Bul. Vitosha 1" },
    registered_at: new Date("2024-01-15")
  },
  {
    name: "Maria Dimitrova",
    email: "maria@example.com",
    address: { city: "Plovdiv", street: "Kapana 5" },
    registered_at: new Date("2024-03-10")
  }
]);

// Добавяне на поръчки
db.orders.insertMany([
  {
    customer_id: ObjectId("64a2234567890abcdef54321"),
    items: [
      { book_id: ObjectId("64b1234567890abcdef11111"), quantity: 1 },
      { book_id: ObjectId("64b1234567890abcdef11112"), quantity: 2 }
    ],
    date: new Date("2024-06-10"),
    total_price: 41.99
  }
]);

// Добавяне на рецензии
db.reviews.insertMany([
  {
    book_id: ObjectId("64b1234567890abcdef11111"),
    customer_id: ObjectId("64a2234567890abcdef54321"),
    rating: 5,
    comment: "Great book, a must-read!"
  },
  {
    book_id: ObjectId("64b1234567890abcdef11112"),
    customer_id: ObjectId("64a2234567890abcdef54322"),
    rating: 4,
    comment: "Very interesting perspective."
  }
]);
