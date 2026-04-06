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

const getUsers = (req,res)=>{
    const getQuery = `select name,email from Users`;
    db.execute(getQuery,(err,results)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.send(results)
    })
}

const updateEntry = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = `update Users set name=? where id=?`
    db.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("User not found!");
            return;
        }
        res.status(200).send("User updated successfully");
    })
}

const deleteEntry = (req,res)=>{
    const {id} = req.params;
    const deleteQuery = `delete from Users where id=?`;
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("User not found!");
            return;
        }
        res.status(200).send("User deleted successfully");
    })
}

module.exports = {
    addEntries,updateEntry,deleteEntry,getUsers
}