// Searching for data in mongo db 

usevmart

// This query will return all the objects with rating to 3.5 
db.items.find({rating: 3.5})
db.items.find({$gte: 3.5})
