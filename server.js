console.log("hola servidor");

const Pelis = require('./models/Pelis');
const Actor = require('./models/Actor');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Configuraciones para express. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/actores', (req,res)=> {
    
    Actor.findAll()
        .then (actores => {
        
        res.send(actores);
        res.sendStatus(200);
    })
    .catch(()=>{
        res.sendStatus(400);
    })

})

app.get('/actores/:id', (req,res)=> {
    
    let idActor = req.params.id;
    Actor.findOne({where: {id:idActor}})
    .then(actor =>{
        res.json(actor);
    })       
});

app.get('/peliculas',(req,res)=>{

    Pelis.findAll()
    .then( peliculas => {

        
        res.send(peliculas);
        res.sendStatus(200);
        
    })
    .catch(()=>{

        res.sendStatus(400);
    })
})
app.listen(PORT,(req,res)=>{
    console.log(`El servidor corriendo en el ${PORT}`);
})