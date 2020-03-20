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
        Author.bulkCreate(
            times(10, () => ({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName()
            }))
        );
    }) 

module.exports = Author;

