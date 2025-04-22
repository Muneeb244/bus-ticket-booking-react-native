import mongoose from "mongoose";

const connectDB = url => {
    return mongoose.connect(url, {
        dbName: "bus_booking"
    })
}

export default connectDB;