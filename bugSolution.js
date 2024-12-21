```javascript
db.users.aggregate([
  {
    $match: { age: { $gt: 30 } } 
  },
  {
    $project: {
      _id: 1,
      age: 1,
      city: { $ifNull: [ "$city", "Unknown" ] } // Handle missing city
    }
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