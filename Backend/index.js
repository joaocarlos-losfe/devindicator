require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const UserRouter = require('./src/routes/user_routes');
const PostRouter = require('./src/routes/post_routes');
const DataResouces = require('./src/routes/data_resources');

app.use(function(req, res, next) 
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/users", UserRouter);
app.use("/post", PostRouter);
app.use("/data-resouces", DataResouces);

app.get("/", (req, res)=>
{
    res.send({menssage: "devindicator server !!!"})
});

// conectando ao banco de dados
mongoose.connect(
    process.env.BASE_URL_DATABASE_CONECTION
).then(()=>
{
    console.log("successfully connected to the database !");
})
.catch((err)=>
{
    console.log(err);
});

//iniciar execução do servidor
app.listen(5000, ()=>{console.log("server is running on port 5000 ...")});


