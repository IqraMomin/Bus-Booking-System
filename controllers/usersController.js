const db = require('../utils/db-connection');

const addEntries = (req,res)=>{
    const {email,name} = req.body;
    const myQuery = `insert into Users(email,name) values(?,?)`;
    db.execute(myQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);
            db.end();
            return;
        }
        res.status(200).send(`User with name ${name} has been created`);
        
    })
}

module.exports = {
    addEntries
}