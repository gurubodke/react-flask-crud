import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456",
    database="pythoncrud"
)

cursor = db.cursor()

print("Connected to database")