//const mongoose = require('mongoose');
import mongoose from "mongoose";
//import { connect }  from 'mongoose/browser';

const user = "kawaiinati30";
const password = "LR87smm9cZsfEgkM";
const coleccion = "techsas";
const uri = `mongodb+srv://${user}:${password}@cluster0.mtxdown.mongodb.net/${coleccion}`
//const uri = `mongodb+srv://${user}:${password}@cluster0.w11tdf8.mongodb.net/${coleccion}?retryWrites=true&w=majority`;

try {
  mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(console.log('Si conecto c:'))
} catch (error) {
  console.log("kagaste mi rey.");
}

const dbConnection = mongoose.connection;

dbConnection.on('open', () => {
    console.log("Se prendio esta mierdaaaa");
})
dbConnection.on('error', () => {
    console.log("llorelo pai");
})

export default dbConnection;