const express = require('express');
const app = express();
const port=4000;
const db = require('./utils/db-connection');
const usersRoutes = require('./routes/usersRoutes');

app.use(express.json());
app.use("/users",usersRoutes);


app.listen(port,()=>{
    console.log("Server is up and running on port",port);
})