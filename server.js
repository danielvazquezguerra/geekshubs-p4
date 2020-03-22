console.log("hola servidor"); // todo va bien. 

//importamos los modelos Pelis y Actor. 
const Pelis = require('./models/Pelis');
const Actor = require('./models/Actor');
const Cines = require('./models/Cines');

//importamos express y el bodyparser. 
const express = require('express');
const bodyParser = require('body-parser');

//asignamos el numero de puerto. 
const app = express();
const PORT = 3000;

//Configuraciones para express. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//ENDPOINTS ACTORES. 

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

//busqueda por nombre del actor. 
app.get('/actores/name/:name', (req,res)=>{

    let name = req.params.name;
    Actor.findOne({where:{firstName:name}})
    .then( actor => {
        res.send(actor);
    })
})

//POST nuevo actor. 
app.post('/actores/nuevo',(req,res)=>{

    res.send(`Nuevo actor agregado`);
    console.log(req.body);

    Actor.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        years: req.body.years,
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

//ENDPOINT PARA LAS PELICULAS. 

//busqueda de todas las peliculas. 
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

})


//POST pelicula nueva.
app.post('/peliculas/nuevo',(req,res)=>{

    res.send(`Nueva Pelicula agregado`);
    console.log(req.body);

    Pelis.create({

        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        year: req.body.year,

    })
})

//ENDPOINTS CINES

//POST nuevo cine. 
app.post('/cines/nuevo',(req,res)=>{

    res.send(`Nuevo cine agregado`);
    console.log(req.body);

    Cines.create({
        nombre: req.body.nombre,
        ciudad: req.body.ciudad,
        provincia: req.body.provincia,
        estreno: req.body.estreno,
    })
})


//busqueda de cine por ciudad.
app.get('/cines/ciudad/:ciudad', (req,res)=>{

    let _ciudad = req.params.ciudad;
    Cines.findAll({where:{ciudad:_ciudad}})
    .then( cines => {
        res.send(cines);
    })
})



//iniciamos la escucha del servidor. 
app.listen(PORT,(req,res)=>{

    console.log(`El servidor corriendo en ${PORT}`);

})