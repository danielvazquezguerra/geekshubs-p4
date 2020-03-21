const sequelize = require('./sequelize');
const { Model, STRING } = require('sequelize');



class Author extends Model {}

Author.init(
    {
        firstName: { type: STRING },
        lastName: { type: STRING },
    },
    {
        sequelize,
        modelName: 'author'
    }  
);

Author.sync({force: true})
    .then( () => {
       
    }) 

module.exports = Author;

