var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

//filter by where
// con.connect(function(err){
//     if (err) throw err;
//     con.query("select * from customers where address = 'Park Lane 38'", function(err, result){
//         if (err) throw err;
//         console.log(result);
//     });
// });

//filter by like 
// con.connect(function(err){
//     if(err) throw err;
    
//     sql = "select * from customers where address like 'S%'";
//     con.query(sql, function(err, result){
//         if (err) throw err;
//         console.log(result);
//     });
// });

//escape query values, prevent sql injections
con.connect(function(err){
    if(err) throw err;

    var addr = 'Mountain 21';
    var sql = "select * from customers where address = " + mysql.escape(addr);
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
});

