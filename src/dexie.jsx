const db = new Dexie("webpack4");

// Declare tables, IDs and indexes
db.version(1).stores({
    friends: "++id, name, age",
    news: "id, title, content",
    movies: "id, title"
});

export default db;
