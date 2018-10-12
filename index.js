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
server.get('/projects', (req, res) => {
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
server.get('/projects/:id', (req, res) => {
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
//// post ////
server.post('/projects/', (req, res) => {
    const { body } = req;
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
server.put('/projects/:id', (req, res) => {
    // grabbing id and request body as arguments for persist handlers
    const { id } = req.params;
    const { body } = req;
    projectMod
        .get(id)
            .then(project => {
                (!project) ?
                res.status(400).json({ error: `The ID, ${id} does not exhist` }) :
                projectMod
                    .update(id, body)
                        .then(resource => {
                            res.status(200).json(resource)
                        })
            })
            .catch(err => res.status(500).json({ error: "There was an error in the request"}))

        // .update(id, body)
        //     .then(resource =>{
        //         projectMod
        //             .get(id)
        //                 .then(project =>{
        //                     (!project) ?
        //                     res.status(400).json({ error: `The ID ${resource.id} does not exhist` }) :
        //                     null
        //                 })
        //         res.status(200).json(resource)
        //     })
        //     .catch(err => res.status(500).json({ error: "There was an error in the request"}))
})

//// delete ////
server.delete('/projects/:id', (req, res) => {
    // grab id
    const { id } = req.params;
    projectMod
        .remove(id)
            .then(amountDeleted => (
                // originally had parameters as res, and response failed, but had to change to different name than res
                res.status(200).json({ message: `${amountDeleted} resouce(s) were removed from the API`})
            ))
            .catch(err => res.status(400).json({ error: "There was an error in removing requested Resource"}))
})
//// get project actions ////
server.get('/projects/:id/actions')

const port = 4444;
server.listen(port, console.log(`\n ====== Port ${port} Online ====== \n`))