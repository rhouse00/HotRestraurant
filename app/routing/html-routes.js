var path = require("path");


module.exports = function(app){

    app.get('/reservations', function(req, res){
          res.sendFile(path.join(__dirname, "../public/reservation.html"));
    });

    app.get('/tables', function(req, res){
          res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.use(function(req, res){
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //other routes..

};
