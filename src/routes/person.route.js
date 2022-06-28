const express = require('express');
const router = express.Router();

const personController = require('../controller/person.controller.js');

// get all persons
router.route('/getAllPersons').get(personController.gettablelist);

// get person by ID;
router.route('/getPersonByID').get('/:id',personController.get);

module.exports = router;
