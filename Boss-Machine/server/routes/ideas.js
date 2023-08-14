const express = require('express');

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('../db.js');

ideasRouter = express.Router();

const checkMillionDollarIdea = require('../checkMillionDollarIdea.js');

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
      req.idea = idea;
      next();
    } else {
      res.status(404).send();
    }
});

ideasRouter.get('/', (req, res, next) => {
    const sendVal = getAllFromDatabase('ideas');
    res.send(sendVal);
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    const foundidea = getFromDatabaseById('ideas', req.params.ideaId);
    if (foundidea) {
        res.send(foundidea);
    } else {
        res.status(404).send();
    }
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const recievedidea = req.body;

    if (recievedidea) {
        addToDatabase('ideas', recievedidea);
        res.status(201).send(recievedidea);
    } else {
        res.status(400).send();
    }
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => { //BROKEN?
    let updatedideaInstance = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(updatedideaInstance);
  });

  ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
  });

module.exports = ideasRouter;