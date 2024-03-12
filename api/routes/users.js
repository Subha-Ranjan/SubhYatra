import express from 'express'
const router = express.Router();


router.get("/", (req,res)=>{
    console.log("Hello... This is Users endpoint");
})

export default router;
