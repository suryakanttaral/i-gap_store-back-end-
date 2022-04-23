var express = require("express");
var body_parser = require("body-parser");
var cookie_parser = require("cookie-parser");
var multer = require("multer");


var app = express();

app.use(body_parser.json({limit:'50mb'}));
app.use(body_parser.urlencoded({limit:'50mb', extended: true}));

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {

        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();

});

app.get("/", (req,res)=>{
    res.send("Welcome to NodeJS");
    res.end();
})

app.use("/admin", require("./routes/admin"))
app.use("/igapvendor/product", require("./routes/igapvendor"))


const  PORT = process.env.PORT || 8081;

app.listen(PORT,function(){
    console.log("website is running...");
})