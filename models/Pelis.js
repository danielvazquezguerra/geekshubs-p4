const sequelize = require('./sequelize');
const { Model, STRING, TEXT } = require('sequelize');


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



Pelis.sync({force: true})
   
      .then( ()=>{
          
          Pelis.create ({

             titulo: "Bad Boys for life",

             descripcion: "Miami vuelve a ser el escenario de esta nueva entrega de Dos policías rebeldes. Allí, los detectives Mike Lowrey (Will Smith) y Marcus Burnett (Martin Lawrence) vuelven a hacer de las suyas, y su nueva aventura volverá a estar plagada de acción, bandas, persecuciones de coches y explosiones.",

            year: "2020",

           })
        })
        .then( ()=>{
          
            Pelis.create ({
  
               titulo: "IT: Chapter Two",
  
               descripcion: "Han pasado casi 30 años desde que el 'El club de los perdedores', formado por Bill, Beverly, Richie, Ben, Eddie, Mike y Stanley, se enfrentaran al macabro y despiadado Pennywise (Bill Skarsgård). En cuanto tuvieron oportunidad, abandonaron el pueblo de Derry, en el estado de Maine, que tantos problemas les había ocasionado. Sin embargo, ahora, siendo adultos, parece que no pueden escapar de su pasado. Todos deberán enfrentarse de nuevo al temible payaso para descubrir si de verdad están preparados para superar sus traumas de la infancia.",
  
              year: "2019",
  
             })
          })
          .then( ()=>{
          
            Pelis.create ({
  
               titulo: "Star Wars: El ascenso de skywalker",
  
               descripcion: "La Resistencia sobreviviente se enfrenta a la Primera Orden una vez más mientras continúa el viaje de Rey, Finn y Poe Dameron. Con el poder y el conocimiento de las generaciones detrás de ellos, comienza la batalla final.",
  
              year: "2020",
  
             })
          })
           

module.exports = Pelis;