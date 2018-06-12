const db = new Dexie("webpack7");

// Declare tables, IDs and indexes
db.version(2).stores({
    friends: "++id, name, age",
    news: "id, title, content",
    movies: "id, title",
    req: " req,res,time"
});

export default db;
