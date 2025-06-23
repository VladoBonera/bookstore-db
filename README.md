# bookstore-db

## 📚 Описание
MongoDB база данни за онлайн книжарница. Съдържа информация за книги, автори, клиенти, поръчки и рецензии.

## 📁 Колекции и структура

### books
- title (string)
- genre (string)
- price (number)
- stock (number)
- author_id (ObjectId)
- tags (array of strings)
- published (object: { year, publisher })

### authors
- _id (ObjectId)
- name (string)
- birth_year (number)
- nationality (string)

### customers
- name (string)
- email (string)
- address (object: { city, street })
- registered_at (date)

### orders
- customer_id (ObjectId)
- items (array of objects: { book_id, quantity })
- date (date)
- total_price (number)

### reviews
- book_id (ObjectId)
- customer_id (ObjectId)
- rating (number)
- comment (string)

## ⚙️ Инструкции за използване

1. Уверете се, че MongoDB е инсталиран и стартиран.
2. Отворете Mongo Shell или MongoDB Compass.
3. Изпълнете `insert.js`, за да добавите началните данни.
4. Използвайте `queries.js`, за да извършвате заявки: четене, редакция, изтриване и агрегиране.
