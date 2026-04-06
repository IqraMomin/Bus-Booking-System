const express = require('express');
const app = express();
const port=4000;
const db = require('./utils/db-connection');
const usersRoutes = require('./routes/usersRoutes');
const busRoutes = require("./routes/busRoutes");

app.use(express.json());
app.use("/users",usersRoutes);
app.use("/buses",busRoutes);


app.listen(port,()=>{
    console.log("Server is up and running on port",port);
})