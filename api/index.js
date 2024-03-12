import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();
const app = express();
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


//Method to connect MongoDB | will be called while backend server is connected
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MONGODB at", new Date().toLocaleTimeString())} catch (error) {
        throw error;  
    }
}
//constant checking the MongoDb connection
mongoose.connection.on("connected",()=>{console.log("MongoDB connnected")})
mongoose.connection.on("disnnected",()=>{console.log("MongoDB Disconnected")})

//middlewares
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);



//Server Start 
app.listen(8800,()=>{
    connect();//Mongo connect method is called
    console.log("Connected to backend")
})

 