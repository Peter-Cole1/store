var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    port:"3306",
   user:"root",
   password:"",
   database:"bamazon"
});

connection.connect(function(error){
    if(error)
    {
        console.log(error);
    }
    else{
        connection.query("SELECT * FROM products WHERE department_name='Prints'",function(error,res){
            if(error){
                console.log(error);
            }
            else{
                console.log(res);
            }
        })
    }
})
