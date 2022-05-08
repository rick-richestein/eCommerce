/* Importing modules */

const path =require('path');                      // for importinh html

//const  userRoutes=require("./user");
const adminExports=require("../controllers/orderExport");

/* Using Express */
const express = require("express");

/* Add router */
const router=express.Router();

/*  Code */
//console.log("userroutes:")
//console.log(userRoutes.orders);
router.use("/admin-orders",(req,res,next)=>{
  //  res.send("EDit and Delete orders page");
  //  res.sendFile("adminOrders")
    res.render("adminOrders");
});



/* Exporting My routes  */
module.exports=router;