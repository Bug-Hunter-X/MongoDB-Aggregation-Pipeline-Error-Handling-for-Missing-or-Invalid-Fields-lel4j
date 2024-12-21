# MongoDB Aggregation Pipeline Error Handling

This repository demonstrates a common error in MongoDB aggregation pipelines and its solution.  The original code attempts to group users by city and calculate average age and counts. However, it doesn't handle cases where the 'city' field might be missing or contains unexpected values, leading to errors.

The solution showcases how to improve the pipeline using the `$ifNull` operator to handle missing 'city' values and provides more robust error handling.