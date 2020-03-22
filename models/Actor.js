const sequelize = require('./sequelize');
const { Model, STRING } = require('sequelize');

class Actor extends Model {}

Actor.init (

    {
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
            
            id: 1,
            firstName : "Will",
            lastName: "Smith",
        })
       
    }) 

module.exports = Actor;

