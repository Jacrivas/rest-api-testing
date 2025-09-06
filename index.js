'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

           return `I'm Jose! ${JSON.stringify(request.query)}`; 
        }
    });

    server.route({
        method: 'POST',
        path: '/',
        handler: (request,h) => {
           const payload = request.payload;
           return('Recieved payload!', payload);
           
           return "Post Arrived!"
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});


//http://localhost:3000






init();

