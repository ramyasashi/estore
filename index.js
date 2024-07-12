const express= require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());


app.get('/',(req, res) =>{
    res.status(200).send({
        tshirt:'',
        size:'large'
    })
})

app.get('/products',(req, res) =>{
    res.status(200).send({
        products:'shirts,pants,Handbags',
        size:'large'
    })
})
app.get('/categories',(req, res) =>{
    
    res.status(200).send({
        products:'shirts,pants,Handbags',
        size:'large'
    })
})



const server = app.listen(PORT, ()=>{
    console.log("App is running on port - 8080");
})