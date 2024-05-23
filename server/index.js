const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecom_test', { useNewUrlParser: true, useUnifiedTopology: true }); 

app.get('/getUsers', (req, res) => {
    UserModel.find({})
    .then(function (reviews) {
        console.log("reviews:", reviews); 
        res.json(reviews); 
    })
    .catch(err => {
        console.error("Error fetching users:", err); 
        res.json(err); 
    });
});

app.post('/addUser', (req, res) => {
    const { name, review ,rating} = req.body;
    const newUser = new UserModel({ name, review,rating });
    newUser.save()
        .then(user => {
            console.log("User added successfully:", user);
            res.status(201).json({ message: "User added successfully", user });
        })
        .catch(err => {
            console.error("Error adding user:", err);
            res.status(500).json({ error: "Failed to add user" });
        });
});


app.listen(3001, () => {
  console.log("Server is running");
});
