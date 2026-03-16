from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import re

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456",
    database="pythoncrud"
)

cursor = db.cursor(dictionary=True)

# GET USERS
@app.route('/users', methods=['GET'])
def get_users():
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return jsonify(users)

# CREATE USER
@app.route('/users', methods=['POST'])
def create_user():

    data = request.json
    name = data['name']
    email = data['email']

    # Email format validation
    email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    
    if not re.match(email_pattern, email):
        return jsonify({"error": "Invalid email format"}), 400

    # Check if email exists
    cursor.execute("SELECT * FROM users WHERE email=%s",(email,))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({"error": "Email already exists"}), 400

    sql = "INSERT INTO users (name,email) VALUES (%s,%s)"
    cursor.execute(sql,(name,email))
    db.commit()

    return jsonify({"message":"User created successfully"})

# UPDATE USER
@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):

    data = request.json

    sql = "UPDATE users SET name=%s,email=%s WHERE id=%s"
    values = (data['name'], data['email'], id)

    cursor.execute(sql, values)
    db.commit()

    return jsonify({"message": "User updated"})

# DELETE USER
@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):

    cursor.execute("DELETE FROM users WHERE id=%s",(id,))
    db.commit()

    return jsonify({"message":"User deleted"})


if __name__ == "__main__":
    app.run(debug=True)