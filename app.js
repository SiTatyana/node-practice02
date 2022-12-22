 const express = require("express");
 const mongoose = require("mongoose");
 require("dotenv").config();
 const contactsRoute = require("./routes/contact");
 const notesRoute = require("./routes/note");

 const app = express();

 const{DB_URL}=process.env;
 app.use(express.json());
 app.use("/contacts", contactsRoute);
 app.use("/notes", notesRoute);

 mongoose.set("strictQuery",false);
 mongoose.connect(DB_URL, () => {
    console.log("Database is connect");
 })

 app.listen(3001, () => {
    console.log("Server is running");
 })
 