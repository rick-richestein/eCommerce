/* Importing modules */

const path =require('path');                      // for importinh html

/* Using Express */
const express = require("express");

/* Add router */
const router=express.Router();

/* variable for storing orders*/
const orders=[];


/*  Importing controllers*/

const addorder=require("../controllers/orderExport");


/*  Code */

//router.get("/add-order",addorder.getAddOrder); 
router.get("/add-order",addorder.getAddOrder); 


//router.post("/add-order",addorder.postAddorder);
router.post("/add-order",addorder.postAddorder);


/* Exporting My routes  */
module.exports=router;
/* exports.routes=router;
exports.orders=orders;  */