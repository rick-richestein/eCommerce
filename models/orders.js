//const orders=[];     //using files now
/* importing file module */
const fs=require('fs');
const path=require('path');
// imprting database file 
const getdb=require("../util/database").getDb;

module.exports=class Order {
    constructor(name,size,quantity,imageUrl,description,price){
        this.name=name;
        this.size=size;
        this.quantity=quantity;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
    }

    save(){ 
             const db=getdb();
            //return this;
            db.collection('orders').insertMany([this]).then(result=>{console.log(result)}).catch(err=>{console.log(err)});
      /*  // orders.push(this);
       const p = path.join(__dirname,"..","data","orders.json");
       fs.readFile(p,(err,fileContent)=>{
           let orders =[]
           if(!err){
                orders= JSON.parse(fileContent);
           }
           orders.push(this);
           fs.writeFile(p, JSON.stringify(orders),(err)=>{
            console.log(err);
           });
            console.log(fileContent);
       }); */
    }

   /*  static fetchAll(cb){
        const p = path.join(__dirname,"..","data","orders.json");
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
       // return orders;           //use file now
    } */
    static fetchAll(){
        const db=getdb();
        return db.collection('orders').find().toArray()
        .then(orders=>{
            console.log('orders from fetcha lld')
          //  console.log(orders);
            return orders;
        })
        .catch(err=>{
            console.log('fetchall eroro')
            console.log(err)
        });  
    }
}