/* Using Express */
const express = require("express");

/* Add router */
const router=express.Router();

/*  Code */

router.use("/admin",(req,res,next)=>{   
    res.send("<h1>This is Admin..Display All Orders</head>");

    //next();  Allows to move to next  use
});



/* Exporting My routes  */
module.exports=router;