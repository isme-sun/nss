#!/usr/bin/env node
const http = require('http');
const connect = require('connect');
const serverStatic = require('serve-static');

var argv = require('yargs')
        .usage('Usage: $0 -p [port] -h [hostname]')
        .argv;

const hostname = argv.h || '127.0.01';
const port = argv.p || 8080;

var app = connect();
app.use(serverStatic(__dirname + '/static'));

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})
