const path=require('path');
const express=require('express');
    const app=express();
    const fs=require('fs');


    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(express.static(path.join(__dirname,'public')));
    app.set ("view engine","ejs");



    app.get("/", function(req,res){
        fs.readdir(`./files`,function(err,files){
            res.render("index",{files:files});
        })
       
    });

 
    // app.get("/", function (req, res) {
    //     fs.readdir(`./files`, function (err, files) {
    //       if (err) {
    //         console.error(err);
    //         return res.status(500).send("Error reading files");
    //       }
    //       res.render("index", { files: files }); // Corrected syntax
    //     });
    //   });

      app.post("/create", function (req, res) {
       console.log(req.body);
       fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details, function (err) {
           res.redirect("/");
       })
      });
      
      app.listen(3000, function () {
          console.log("Server started");
      })      