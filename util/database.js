/* importing mysql */

const mysql=require("mysql2");

// to create pool of connections

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    database:'ske',
    password:''
});

// exporting connection


module.exports=pool.promise();