const sequelize = require('./sequelize');
const { Model, 
        STRING, 
        TEXT 
} = require('sequelize');



const Author = require('./Author');

class Post extends Model {}

Post.init(
    {
        title: { type: STRING },
        content: { type: TEXT },
    },
    {
        sequelize,
        modelName: 'post'
    }  
);


Post.belongsTo(Author);
Author.hasMany(Post);

Post.sync({force: true})
   
      .then( ()=>{
          
          Post.create({
             titulo: 'Bad Boys for life',
             descripcion: 'Miami vuelve a ser el escenario de esta nueva entrega de Dos policías rebeldes. Allí, los detectives Mike Lowrey (Will Smith) y Marcus Burnett (Martin Lawrence) vuelven a hacer de las suyas, y su nueva aventura volverá a estar plagada de acción, bandas, persecuciones de coches y explosiones.',
             isEstreno: 1,
             actor_id: 2,
             cines_id: 1
           })   
        })
           

module.exports = Post;