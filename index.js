const express = require('express');
const server = express();

server.use(express.json());

//// test ////
server.get('/', (req, res) => {
    res.json('testing server');
})

//// get ////

//// get id ////

//// post ////

//// update ////

//// delete ////


const port = 4444;
server.listen(port, console.log(`\n ====== Port ${port} Online ====== \n`))