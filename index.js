'use strict';

const Hapi = require('@hapi/hapi');
const joi = require('joi');
// ^ update me if you want me to use the older one or If I am fine to use this one
const path = require('path');
const fs = require('fs');


const routes = []
const routesPath = path.join(__dirname, "routes")

fs.readdirSync(routesPath).forEach(x => routes.push(...require(path.join(routesPath, x))));

// ^ this was giving an issue for a while



const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(routes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();





