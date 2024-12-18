const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.log("Error while connecting MongoDB ", error);
    }
}

module.exports = connectDatabase;