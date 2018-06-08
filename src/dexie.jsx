const db = new Dexie("webpack5");

// Declare tables, IDs and indexes
db.version(3).stores({
    friends: "++id, name, age",
    news: "id, title, content",
    movies: "id, title"
});

export default db;
