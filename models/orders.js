//const orders=[];     //using files now
/* importing file module */
const fs=require('fs');
const path=require('path');

module.exports=class Order {
    constructor(size,quantity,imageUrl,description,price){
        this.size=size;
        this.quantity=quantity;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
    }

    save(){
       // orders.push(this);
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
       });
    }

    static fetchAll(cb){
        const p = path.join(__dirname,"..","data","orders.json");
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
       // return orders;           //use file now
    }
}