const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected " + conn.connection.host)
    } catch (error) {
        console.log("Error connection to MDB", error.message)
        process.exit(1);
    }
}

module.exports = connectDB;