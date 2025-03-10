import pymongo
from pymongo import MongoClient
from datetime import datetime

def create_mongodb_collection():
    """
    Creates a MongoDB database "test_coords" with a collection "coord_data"
    on localhost.
    """
    try:
        # Establish a connection to the MongoDB server running on localhost.
        client = MongoClient('mongodb://localhost:27017/')

        # Create or access the "test_coords" database.
        db = client['test_coords']

        # Create or access the "coord_data" collection.
        collection = db['coord_data']

        # Create indexes for lat and lng.
        collection.create_index([("lat", pymongo.ASCENDING)])
        collection.create_index([("lng", pymongo.ASCENDING)])

        print("MongoDB database 'test_coords' and collection 'coord_data' created successfully.")

    except pymongo.errors.ConnectionFailure as e:
        print(f"Could not connect to MongoDB: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    create_mongodb_collection()