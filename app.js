/* Global Modules*/
const http=require("http");

const path =require("path");

/* Installed Modules */
const express = require("express");
const bodyParser = require("body-parser");         // trasnfer req data across routs

// importinh mariadb
const mongoConnect=require("./util/database").mongoConnect;

/* Exported Modules */
const  userRoutes=require("./routes/user");
const adminRoutes=require("./routes/admin");
const errorRoutes=require("./routes/404");
const homeRoutes=require("./routes/home");
const adminOrderRoutes=require("./routes/adminOrders");

//connecting sql
/* db.execute("Select * from order").
    then(result=>{
    console.log("result");
    crossOriginIsolated.log(result);
}).catch(err=>{
    console.log("error");
    console.log(err);
}); */

/* Using Express */
const app = express();

/*  template engine use*/
app.set("view engine","pug");
app.set("views","views");

/*  To Pass data from one page to another eg form data */
app.use(bodyParser.urlencoded({extended:false}));


/* To pass css files statically into html */
app.use(express.static(path.join(__dirname,"public")))

/* Code */


app.use(userRoutes);

app.use(adminRoutes);   

app.use(adminOrderRoutes); 

app.use(homeRoutes); 

app.use(errorRoutes);


// connecting mariadb

mongoConnect(()=>{

})
//listen to server 
app.listen(3000);