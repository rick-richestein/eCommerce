/* Global Modules*/
const http=require("http");


/* Installed Modules */
const express = require("express");
const bodyParser = require("body-parser");


/* Exported Modules */
const shopRoutes=require("./routes/shop");
const adminRoutes=require("./routes/admin");


/* Using Express */
const app = express();

/*  To Pass data from one page to another eg form data */
app.use(bodyParser.urlencoded({extended:false}));

/* Code */



app.use(shopRoutes);

app.use(adminRoutes);


app.use((req,res,next)=>{   
    res.status(404).send("<h1>404 Error Page</head>");

    //next();  Allows to move to next  use
});


/* Listen to Server */
app.listen(3000);