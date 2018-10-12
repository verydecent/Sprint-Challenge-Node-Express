const express = require('express');
const server = express();
const actionMod = require('./data/helpers/actionModel');
const projectMod = require('./data/helpers/projectModel');

//// middlware ////
const resourceObject = (req, res, next) => {

}
server.use(express.json());

//// test ////
server.get('/', (req, res) => {
    res.json('testing server');
})

//// get ////
server.get('/list', (req, res) => {
    projectMod
        .get()
            .then(projects => (
                res.json(projects)
            ))
            .catch(err => (
                res.status(500).json({ error: "Resources could not be found" })
            ))
})
//// get id ////
server.get('/list/:id', (req, res) => {
    const { id } = req.params;
    projectMod
        .get(id)
            .then(project => {
                res.status(200).json(project)
            })
            .catch(err => (
                res.status(500).json({ error: "There was an error in the request"})
            ))
})
//// get project actions ////

//// post ////
server.post('/list/', (req, res) => {
    const body = req.body;
    const newProject = body;
    console.log(newProject)
    projectMod
        .insert(newProject)
            .then(resource => {
                (!resource) ?
                res.status(400).json({ error: "Needed keys are missing in request's body... Please add them"}) :
                // goes to falsey statement, but skips the truthy statement even if body is missing a property...
                res.status(200).json(resource)
            })
            .catch(err => res.status(400).json({  error: "There was an error inserting to the API" }))
})
//// update ////

//// delete ////


const port = 4444;
server.listen(port, console.log(`\n ====== Port ${port} Online ====== \n`))