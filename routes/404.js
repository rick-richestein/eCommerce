const express=require("express");

const path =require("path");

const router=express.Router();

router.use((req,res,next)=>{   
    res.status(404).render("404",{docTitle:"404 Error - Page Not Found", path:"/add-order"});
    //next();  Allows to move to next  use
});


module.exports=router;