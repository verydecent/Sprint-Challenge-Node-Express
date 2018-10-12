const express = require('express');
const server = express();
const actionMod = require('./data/helpers/actionModel');
const projectMod = require('./data/helpers/projectModel');

server.use(express.json());

//// test ////
server.get('/', (req, res) => {
    res.json('testing server');
})

//// get ////
server.get('/list', (req, res) => {
    actionMod
        .get()
            .then(projects => (
                res.json(projects)
            ))
            .catch(err => (
                res.status(500).json({ error: "Resources could not be found" })
            ))
})

//// get id ////

//// post ////

//// update ////

//// delete ////


const port = 4444;
server.listen(port, console.log(`\n ====== Port ${port} Online ====== \n`))