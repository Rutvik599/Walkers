const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var conn = mysql.createConnection({
    'host':'localhost',
    'user':'root',
    'password':'',
    'database':"login"
});
conn.connect((err)=>{
    if(!err)
        console.log("Database is Connected ....!");
    else
        console.log(err.message);
})
app.use(cors());
app.get('/',(req,res)=>{
    console.log("Server side is Correct...!");
});
app.post('/signin',(req,res)=>{
    const  data = Object.values(req.body)
    console.log("in /signin data is " + data);
   const sqlquery =  `INSERT INTO user_info (email_address, username, password) VALUES (?)`;
    conn.query(sqlquery,[data],(err,result)=>{
        if(!err){
            console.log("Data Inserted Successfully..!");
            res.json({statusmessage:true});
        }
        else{
            console.log(err);
            res.json({statusmessage:false});
        }
    });
});
app.post('/login',(req,res)=>{
        const  data = Object.values(req.body)
       console.log(data[0])
        var sqlquery = `SELECT * FROM user_info where username = ?`;
    conn.query(sqlquery,[data[0]],(err,result)=>{
        if(!err){
            const username = result[0].username;
            const password = result[0].password;
            if(username === data[0]&&password===data[1])
                res.json({statusmessage:true});
            else    
                 res.json({statusmessage:false});
        }
        else{
            console.log(err)
        }
    });
});
app.post('/updatepassword',(req,res)=>{
    const data = Object.values(req.body)
    console.log(data)
    try{
    var sqlquery = `SELECT * FROM user_info where username = ?`;
    conn.query(sqlquery,[data[0]],(err,result)=>{
        if(!err){
            const username = result[0].username;
            const password = result[0].password;
            if(username === data[0]&&password===data[1])
            {
                var sqlnew = 'UPDATE user_info set password = ? WHERE username = ?'
                conn.query(sqlnew,[data[2],data[0]],(err1,result1)=>{
                        if(!err1){
                            res.json({message:"From updatepass",statusmessage:true});           
                        }
                        else{
                            console.log(err1)
                            res.json({message:"From updateFail",statusmessage:false});
                        }
                })
            }
            else    
                 res.json({message:"Username and pass not match",statusmessage:false});
        }
        else{
            console.log(err)
        }
    });}
    catch(e){
        res.json({message:"Username and pass not Valid",statusmessage:false});
    }
});
app.post('/Account/delete',(req,res)=>{
    const data = Object.values(req.body)
    console.log(data)
    try{
        var sqlquery = 'DELETE FROM user_info WHERE username = ?' 
        conn.query(sqlquery,[data[0]],(err,result)=>{
                if(!err){
                    res.json({message:"Account Deleted Successfully...!",statusmessage:true});   
                }
                else{
                    res.json({message:"Account not deleted",statusmessage:false});            
                }
        });
    }
    catch(e){
        console.log(e)
        res.json({message:"Account not deleted",statusmessage:false});
    }
    
});
app.listen(8081,(err)=>{
    if(!err)
        console.log("Server is Listening on http://localhost:8081");
})