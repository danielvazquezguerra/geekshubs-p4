console.log("hola servidor");

const Post = require('./models/Post');
const Author = require('./models/Author');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

//Configuraciones para express. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res)=> {
    res.send('Hola Mundo');
    Post.findAll()
    .then(posts =>{
        res.json(posts);
    })
})


app.listen(PORT,(req,res)=>{
    console.log(`API REST inicializado en ${PORT}`);
})
