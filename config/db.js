const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = "mongodb+srv://user:PQk8I6inDAJjkQza@cluster0.ab4wz.mongodb.net/fileshare?retryWrites=true&w=majority"

function connectDB() {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("DB Connected");
    }).catch(err => {
        console.log("Connection Failed");
    })


}

module.exports = connectDB;