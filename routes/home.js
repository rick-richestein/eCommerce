/* Importing modules */

const path =require('path');                      // for importing html

/* Using Express */
const express = require("express");
const { dirname } = require('path');

/* Add router */
const router=express.Router();

/*  Code */

router.get("/",(req,res,next)=>{   
   // console.log(req.body);
   // res.sendFile(path.join(__dirname,'..','views','home.html'));
   res.render("home");
    //res.redirect("/");
    //next();  Allows to move to next  use
});



/* Exporting My routes  */
module.exports=router;