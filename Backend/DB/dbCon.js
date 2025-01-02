const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const mongoURI = "mongodb://127.0.0.1:27017/urbangrow";
        
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Atlas Successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        console.error("Please check your MongoDB Atlas credentials");
        process.exit(1);
    }
};

module.exports = connectDb;