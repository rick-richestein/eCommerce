/* variable for storing orders*/
//const orders=[];          // using model class now

/* importing class order from model*/

const Order= require("../models/orders");


exports.getAddOrder=(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','user.html'));
      res.render("user", {docTitle:"Add Orders", path:"/add-order"});
     // res.send('<form action="/add-order" method ="POST"><input type="text" name="order"><button type ="submit">ADD ORDER</button></form>');
}

exports.postAddorder=(req,res,next)=>{   
    const name =req.body.name;
    const order=req.body.order;
    const quantity=req.body.quantity;
    const desciption=req.body.desciption;
    const imageUrl=req.body.imageUrl;
    const price=req.body.price;
    console.log(req.body);
    const orders =new Order(name,order,quantity,desciption,imageUrl,price);
    orders.save();
  //  orders.push({size : req.body.order});                        // using model class now
    res.send("<h1>Order Placed Successfull</head>");
   // res.redirect("/");
    //next();  Allows to move to next  use
}

exports.adminOrder=(req,res,next)=>{   
    /* Order.fetchAll(()=>{
            // const orderList=userRoutes.orders;
        console.log("order in admin:");
        // console.log(orders); 
        // res.sendFile(path.join(__dirname,'..','views','admin.html'));
      // const orders = 
        res.render("admin",{order:orderList , docTitle:"Your Orderssss" , path:"/add-order"});
    
        //next();  Allows to move to next  use
      
    }); */
    let display;
    let orderList=Order.fetchAll();
    orderList.then(function(result) {
      console.log('result') // "Some User token"
      console.log(result) // "Some User token"
      //console.log('result222222') // "Some User token"
      console.log("order in admin:");
     // console.log(result)
      res.render("admin",{order:result , docTitle:"Your Orderssss" , path:"/add-order"});
    })
      // const orderList=userRoutes.orders;
   

}