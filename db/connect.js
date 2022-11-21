const mongoose = require ("mongoose");

db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection established 👍👍👍")
    } catch (error){
        console.log("DB error:", error)
    }
}

module.exports = db;