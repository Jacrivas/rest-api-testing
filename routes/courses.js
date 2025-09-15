const joi = require('joi');


//I only realized at the end that it has to be module.exports. For a while I had it at module.export
module.exports = [{
    method: 'GET',
    path: '/courses/{subject}',
    handler: (request, h) => {
    return request.query.subject|| 'No info was Given';
    }
},
{
    method: 'GET',
    path: '/courses/credits/{number}',
    handler: (request, h) => {
    return request.query.number|| 'No info was Given'
    }
},

{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return request.query.subject || 'No info was Given';
    }
}]

/*
http://localhost:3000/courses/MAT
http://localhost:3000/courses/credits/3
*/

