const express = require('express');

const { 
    addToDatabase,
    getAllFromDatabase,
    deleteAllFromDatabase,
    createMeeting,
  } = require('../db.js');


meetingsRouter = express.Router();


meetingsRouter.get('/', (req, res, next) => {
    const sendVal = getAllFromDatabase('meetings');
    res.send(sendVal);
})

meetingsRouter.post('/', (req, res, next) => {
    let newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
  });
  
  meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
  });
  

module.exports = meetingsRouter;