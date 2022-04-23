var express = require("express");
var cookie_parser = require("cookie-parser");
var Igapvendor = require("../models/igapvendor");
const router = express.Router();

 
 
 
 
 router.post("/save", async (req, res) => {
    let body = req.body;
    let igapvendor = new Igapvendor.Igapvendor();
    igapvendor.id = body.data.id;
    igapvendor.name = body.data.name;
    igapvendor.title = body.data.title;
    igapvendor.description = body.data.description;
    igapvendor.specification = body.data.specification;
    igapvendor.picpath = body.data.picpath;
    igapvendor.igapvendorid = body.data.igapvendor;
    igapvendor.mrp = body.data.mrp;
    igapvendor.price = body.data.price;
    igapvendor.instock = body.data.instock;
    igapvendor.igap_product_categoryid = body.data.igap_product_categoryid;
    igapvendor.save().then(result => {
        console.log(result);
        let data = {
        "data": {
            "status": "success"
            
          
        }
    }
    res.end(JSON.stringify(data));
   },
   err => {
       let data = {
           "data": {
               
               "status": "fail"
            }
        };
           res.end(JSON.stringify(data));
        });
    });



    router.post("/list", async (req, res) => {
        let body = req.body;
        let igapvendor = new Igapvendor.Igapvendor();
        igapvendor.list().then(result => {
        console.log(result);
        let data = {
         "data":{  
                "data": result,
                "status": "success"
                
            }    
        }
        res.end(JSON.stringify(data));
    },
    err => {
               let data = {
                   "data": {
    
                       "status": "fail"
                    }
                };
                res.end(JSON.stringify(data));
            });
        });



        
    router.post("/delete", async (req, res) => {
        let body = req.body;
        let igapvendor = new Igapvendor.Igapvendor();
        igapvendor.id = body.data.id; 
      
        igapvendor.delete().then(result => {
        console.log(result);
        let data = {
           
            "status": "success",
                "data": result,
                
            
        }
        res.end(JSON.stringify(data));
    },
    err => {
               let data = {
                   "data": {
    
                       "status": "fail"
                    }
                };
                res.end(JSON.stringify(data));
            });
        });
     

        router.post("/get", async (req, res) => {
            let body = req.body;
            let igapvendor = new Igapvendor.Igapvendor();
            igapvendor.id = body.data.id; 
          
            igapvendor.get().then(result => {
            console.log(result);
            let data = {
               
                "status": "success",
                    "data": result,
                    
                
            }
            res.end(JSON.stringify(data));
        },
        err => {
                   let data = {
                       "data": {
        
                           "status": "fail"
                        }
                    };
                    res.end(JSON.stringify(data));
                });
            });

    module.exports = router;