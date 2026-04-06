const db = require("../utils/db-connection");

const getAvailableSeats = (req,res)=>{
    const {seats} = req.params;
    const getSeatsQuery = `select busNumber from Buses where availableSeats >= ?`
    db.execute(getSeatsQuery,[seats],(err,results)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.send(results);
    })
}

const addBus = (req,res)=>{
    const {busNumber,totalSeats,availableSeats} = req.body;
    const addBusQuery = `insert into Buses(busNumber,totalSeats,availableSeats) values
    (?,?,?)`;
    db.execute(addBusQuery,[busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.send("Bus has been added!");
    })

}

module.exports={getAvailableSeats,addBus}