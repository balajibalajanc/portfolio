const path= require('path');
const express=require('express');

const { request } = require('http');

const public_dir_path=path.join(__dirname,'../public');

const port=process.env.PORT || 3000
const app=express()

app.use(express.static(public_dir_path))
app.get('/',(req,res)=>
{
    res.render('index',{
        title:'Hi successfully done Dyamic implementation'
    });
})


app.listen(port,()=>{   
    console.log("server is up and running in the port: "+port);
});
