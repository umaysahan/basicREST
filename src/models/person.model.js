var dbConn  = require('../../config/db.config');

var Person = function(person){
    this.id     =   person.first_name;
    this.time_stamp      =   person.time_stamp;
    this.age          =   person.age;
    this.industry          =   person.industry;
    this.title   =   person.title;
    this.annual_salary    =   person.annual_salary;
    this.currency         =   person.currency;
    this.address         =   person.address;
    this.experience     =   person.experience;
    this.clarify     =   person.clarify;
    this.other_currency     =   person.other_currency;
}

// get all persons
Person.getAllPersons = (result) =>{
    dbConn.query('SELECT * FROM mytable WHERE is_deleted=0', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

// get persons by ID from DB
Person.getPersonByID = (id, result)=>{
    dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
module.exports = Person;
