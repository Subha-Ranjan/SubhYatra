import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name:{type:String, required: true},
    address:{type:String, required: true},
    type:{type:String, required: true},
    distance:{type:String, required: true},
    city:{type:String, required: true},
    desc:{type:String, required:true},
    cheapestPrice:{type:Number,required:true},

    rating:{type:Number, min:0, max:5},
    featured:{type: Boolean, default:false},
    rooms:{type:[String]},//Array of Strings
    photos:{type:[String]}//Array of Strings
})







export default mongoose.model('hotels', HotelSchema)