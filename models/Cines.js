const sequelize = require('./sequelize');
const { Model, STRING } = require('sequelize');

class Cines extends Model {}

Cines.init (

    {
        nombre: { type: STRING },
        ciudad: { type: STRING },
        provincia: { type: STRING},
        estreno: { type: STRING},
    },
    {
        sequelize,
        modelName: 'cines'
    }  
);

Cines.sync({force: true})
    .then( () => {

        Cines.create({
            
            nombre: "Yelmo",
            ciudad: "Valencia",
            provincia: "Valencia",
            estreno: "Bad Boys For Life",
        })
       
    }) 

module.exports = Cines;

