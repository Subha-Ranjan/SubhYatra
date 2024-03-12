import express from 'express'   
import Hotel from "../models/Hotel.js"
const router = express.Router();



//Create
router.post("/", async (req,res)=>{
// const {name,address,type,distance,city,desc,cheapestPrice} = req.body;
console.log(req.body)
try{
        const hotel = new Hotel(req.body);
        const savedHotel = await hotel.save();
        res.status(200).send(savedHotel);
    }catch(error){
        res.status(500).send({message: error.message})
    }
})

//Update

router.put("/:id",async(req,res)=>{
    const {id} = req.params
    try {
        // const hotel = await Hotel.findByIdAndUpdate(id, req.body, {new:true})
        //{new:true} =====>  const hotelUpdated = await Hotel.findById(id)
        const hotelUpdated = await Hotel.findByIdAndUpdate(id, {$set:req.body}, {new:true})
        res.status(200).send(hotelUpdated)
    } catch (error) {
        res.status(500).send({message: error.message})    
    }
})

//Delete
router.delete("/:id", async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted."); //when used as NON-OBJECT form like this : res.send = without quotation and res.json = with quotation mark 
      } catch (err) {
        res.status(500).json(err.message);
      }
})


//GET ALL
router.get("/", async(req,res)=>{
    try {
        const hotels = await Hotel.find({});
        res.status(200).json(hotels); //res.send and res.json are used interchangeablly 
      } catch (err) {
        res.status(500).json(err.message);
      }
})
//GET ONE
router.get("/:id", async(req,res)=>{
    const {id} = req.params;
    try {
       const hotels = await Hotel.findById(id)
       res.status(200).send(hotels)
    } catch (error) {
        res.status(500).send({message: error.message})
    }

})
export default router;

try {

} catch (error) {
    res.status(500).send({message: error.message})    
}