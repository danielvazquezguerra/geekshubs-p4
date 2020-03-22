const sequelize = require('./sequelize');
const { Model, STRING, TEXT } = require('sequelize');



const Actor = require('./Actor');

class Pelis extends Model {}

Pelis.init(
    {
        titulo: { type: STRING },
        descripcion: { type: TEXT },
    
    },
    {
        sequelize,
        modelName: 'peliculas'
    }  
);


// Pelis.belongsTo(Actor);
// Actor.hasMany(Pelis);

Pelis.sync({force: true})
   
      .then( ()=>{
          
          Pelis.create ({

             titulo: "Bad Boys for life",

             descripcion: "Miami vuelve a ser el escenario de esta nueva entrega de Dos policías rebeldes. Allí, los detectives Mike Lowrey (Will Smith) y Marcus Burnett (Martin Lawrence) vuelven a hacer de las suyas, y su nueva aventura volverá a estar plagada de acción, bandas, persecuciones de coches y explosiones.",

           })
        })
           

module.exports = Pelis;