
from pymongo import MongoClient
from js import console
#from bson.objectid import ObjectID

cluster = "mongodb+srv://iffy:RdpLp27wFBLNzKz6@cluster0.vkaejln.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(cluster)

print(client.list_database_names())

db = client.web_admin

print(db.list_collection_names())

user = {"name": "Shaun", "email": "shaunmusodza.sm@gmail.com",
        "password": "password1", "contact_number": "0739650785"}

todos = db.user

result = todos.insert_one(user)

result = todos.find_one({"name": "Shaun"})

email = result["email"]

