var express = require('express');

var mysql = require('mysql');
var app=express();
var PORT=1234;

var connection= mysql.createConnection({
// properties...!!
    host: 'localhost',
    user:'root',
    password:'',
    database:'sampleDB'
});

connection.connect(function(error){
    // it is a call back function..
    if(error)
    {
        console.log('ERROR');
        
    }
    else{
        console.log('connected');
        
    }
});
app.get('/',function(req,res){
    var que = "SELECT a.COLLEGENAME,a.COLLEGETYPE,a.LOCATION,b.CSE,B.ISE,b.ME,b.EC,b.CV,b.ENT,b.OPTOMETRY,b.SPEECHHEARING,b.CARDIOLOGY,c.HOSTEL,c.STARTUPS,c.DIGITALLIBRARY,c.WIFI,c.CAFETERIA,c.HANDSONLABS FROM college a,branches b,facilities c where a.branch = b.ID and a.facilities =c.ID";

    connection.query(que,function(error,rows,fields){
        if(error)
        {
            console.log("ERROR!!");
        }
        else{
            res.json(rows);
            console.log("Successful query");
        }
    });
});
app.listen(PORT);
