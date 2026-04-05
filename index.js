const express = require('express');
const app = express();
const port=4000;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Cutesel79*",
    database:"bus_booking_system"
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection created")
})

const myQuery = [`create table Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
)`,
`create table Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(10),
    totalSeats INT,
    availableSeats INT
)`,
`create table Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
)`,
`create table Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT,
    paymentStatus VARCHAR(255)
)`]
myQuery.forEach((query)=>{
    connection.execute(query,(err)=>{
    if(err){
        console.log(err);
        connection.end();
        return;
    }
    console.log("Tables created");
})})

app.listen(port,()=>{
    console.log("Server is up and running on port",port);
})