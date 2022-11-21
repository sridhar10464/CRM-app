require ("dotenv").config();
const express = require("express");
const db = require("./db/connect");
const userRoutes = require("./routes/user.routes") //import routes

const app = express ();

// connecting DB
db();

// middelware
app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (request, response) => {
    response.send("welcome to CRM app 📱 🤳");
})

const PORT = process.env.PORT || 4000;

app.listen (PORT, () => {
    console.log (`App is running in ${PORT} 👏👏👏`)
});