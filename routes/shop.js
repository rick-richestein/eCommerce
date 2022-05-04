/* Using Express */
const express = require("express");

/* Add router */
const router=express.Router();

/*  Code */

router.get("/add-order",(req,res,next)=>{
    res.send('<form action="/add-order" method ="POST"><input type="text" name="order"><button type ="submit">SUBMIT</button>');
}); 


router.post("/add-order",(req,res,next)=>{   
    console.log(req.body);
    res.send("<h1>Order Placed Successfull</head>");
    //res.redirect("/");
    //next();  Allows to move to next  use
});


router.get("/",(req,res,next)=>{   
    console.log(req.body);
    res.send("<h1>GST PAN</head>");
    //res.redirect("/");
    //next();  Allows to move to next  use
});


/* Exporting My routes  */
module.exports=router;