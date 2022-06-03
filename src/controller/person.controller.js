const personModel = require('../models/person.model.js');
module.exports = {
    gettablelist: function (req,res) {
        personModel.getAllPersons((err, persons) =>{
            console.log('They are here');
            if(err)
            res.send(err);
            console.log('Persons', persons);
            res.send(persons)
        })
    },
    // rest of the functions
    getPersonByID: function(req,res) {
        personModel .getPersonByID(req.params.id, (err, person)=>{
            if(err)
            res.send(err);
            console.log('single person data',person);
            res.send(person);
    },
    router)
  }

// get all persons list

};

