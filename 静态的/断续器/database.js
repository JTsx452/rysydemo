function search(input){
    let mysql = require("mysql");

    let connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "ryjfsy",
        database: "rysy"
    });

    connection.connect((err) =>{
        if(err){
            console.error("连接失败\n");
            return;
        }
        console.log("连接成功");
    });

    let test = "test1";
    let search_result = undefined;

    connection.query("select * from search", (err, result) =>{
        if(err) {
            console.error("查询失败\n");
            return;
        }

        search_result = result;
        
        return search_result[0].id_search;
    })


    connection.end();

}



