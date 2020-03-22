const sequelize = require('./sequelize');
const { Model, STRING, NUMBER } = require('sequelize');

class Actor extends Model {}

Actor.init (

    {
        idActor: { type: NUMBER },
        firstName: { type: STRING },
        lastName: { type: STRING },
    },
    {
        sequelize,
        modelName: 'actores'
    }  
);

Actor.sync({force: true})
    .then( () => {

        Actor.create({
            
            idActor: 1,
            firstName : "Will",
            lastName: "Smith",
        })
       
    }) 

module.exports = Actor;

