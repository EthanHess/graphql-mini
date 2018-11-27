const characters = require('./model'); 

module.exports = {
    Query: {
        people: () => {
            return characters
        }
    }, 
    Person: {
        homeworld(person) {
            return {
                name: 'blah', 
                climate: 'something', 
                population: 5
            }
        }
    }
}