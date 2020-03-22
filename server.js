console.log("hola servidor"); // todo va bien. 

//importamos los modelos Pelis y Actor. 
const Pelis = require('./models/Pelis');
const Actor = require('./models/Actor');

//importamos express y el bodyparser. 
const express = require('express');
const bodyParser = require('body-parser');

//asignamos el numero de puerto. 
const app = express();
const PORT = 3000;

//Configuraciones para express. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//endpoint para todos los actores. 
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


//endpoint para los actores por id. 
app.get('/actores/:id', (req,res)=> {
    
    let _id = req.params.id;
    Actor.findOne({where: {id:_id}})
    .then(actor =>{
        res.json(actor);
    })       
});

//endpoint para todas las peliculas. 
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

app.post('/actores/nuevo',(req,res)=>{
    res.send(`Nuevo actor agregado`);
    console.log(req.body);
    Actor.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
})

app.put('/actores/:id',(req,res)=>{

    let _id = req.params.id;
    let actorUpdate = req.body;

    Actor.findOne({where:{id:_id}})

    .then(actor => {
        actor.update(actorUpdate)
    .then(nuevoActor =>{
        res.json(nuevoActor);
    })
    })
})


//iniciamos la escucha del servidor. 
app.listen(PORT,(req,res)=>{

    console.log(`El servidor corriendo en el ${PORT}`);

})