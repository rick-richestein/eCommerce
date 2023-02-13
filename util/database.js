/* importing mysql */

const mysql=require("mysql2");
const mongodb = require('mongodb');
const MongoClient=mongodb.MongoClient;

//calling nad ending db whne not required
let _db;

const mongoConnect=()=>{
    MongoClient.connect('mongodb+srv://rickrichestein:rickrichestein@cluster0.p2gdd.mongodb.net/shri_krishna_enterprises?retryWrites=true&w=majority')
    .then(client=>{
    console.log("Connected");
    _db=client.db();
    //callback(client);
    }).catch(err=>{
        console.log(err);
        throw err;
    })

};
// to create pool of connections
/* 
const pool=mysql.createPool({
    host:"jdbc:mariadb://localhost:3306/DB?user=root&password=",
    user:"root",
    database:'ske',
    password:''
}); 
const pool = mariadb.createPool({
    host: 'localhost', 
    user:'root', 
    password: '',
    connectionLimit: 5
});  */

// endind db query
const getDb=()=>{
    if(_db){
        return _db;
    }
    else{
       // throw 'No Databse found!!';
    }
}




// exporting connection
//module.exports=pool.promise();
//module.exports=mongoConnect;

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;