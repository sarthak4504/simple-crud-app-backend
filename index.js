const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.routes.js');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }) );


mongoose.connect("mongodb+srv://sarthakpathak4504_db_user:k0nIUuTLGvuoVCXz@backenddb.50y1p3k.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });