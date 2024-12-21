```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $match: { age: { $gt: 30 } } // Find users older than 30
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" },
      totalCount: { $sum: 1 }
    }
  }
]);
```