const Database = require("../models/Database");

class Igapvendor {
    id = 0;
    name = "";
    title = "";
    description = "";
    specification = "";
    picpath = "";
    igapvendorid = "";
    mrp ="";
    price ="";
    instock = "";
    igap_product_categoryid = "";
    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.title = "";
        this.description = "";
        this.specification= "";
        this.picpath = "";
        this.igapvendorid = "";
        this.mrp = "";
        this.price = "";
        this.instock = "";
        this.igap_product_categoryid = ""
    }

  
    save = () => {
        if (this.id == 0) {

            this.query = "INSERT INTO igap_vendor_product (name,title,description,specification,picpath,igapvendorid,mrp,price,instock,productCid) ";
            this.query += " VALUES ('" + this.name + "','" + this.title + "','" + this.description + "','" + this.specification + "', '"+ this.picpath +"','"+ this.igapvendorid+"','"+ this.mrp +"','"+this.price +"','"+ this.instock +"','"+ this.igap_product_categoryid+"')";
        }
        else {

            this.query = "UPDATE igap_vendor_product SET name='" + this.name + "' , title = '" + this.title + "', description = '" + this.description  + "' + specification = '"+ this.specification +"', picpath = '"+ this.picpath+"',igapvendorid = '"+ this.igapvendorid +"', mrp = '"+ this.mrp +"',price = '"+ this.price +"', instock = '"+ this.instock +"', igap product categoryid = '"+ this.igap_product_categoryid+"' ";
            this.query += " WHERE id =" + this.id ;
        }

        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err){
                    return reject(err) };
                resolve(result);
            });
        });

        }

   


list = ()=> {
    this.query = "SELECT * FROM igap_vendor_product";
    console.log(this.query);
    return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
            this.db.close();
            if (err){
                return reject(err) };
            resolve(result);
        });
    });
}


delete = ()=>{
    this.query = "DELETE FROM igap_vendor_product";
    this.query += " WHERE id = '"+ this.id +"'";
    console.log(this.query);
    return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
            this.db.close();
            if (err){
                return reject(err) };
            resolve(result);
        });
    });
}


get = ()=>{
    this.query = "SELECT * FROM igap_vendor_product";
    this.query += " WHERE id = '"+ this.id +"'";
   console.log(this.query);
    return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
            this.db.close();
            if (err){
                return reject(err) };
            resolve(result);
        });
    });
}

}

module.exports = {

    Igapvendor:  Igapvendor

} 