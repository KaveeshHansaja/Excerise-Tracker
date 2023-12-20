const router = require('express').Router(); // router variable
let Excercise = require('../modules/excercise.model'); // excercise model

router.route('/').get((req, res) => { // get request
    Excercise.find() // find excercises
        .then(excercises => res.json(excercises)) // return excercises
        .catch(err => res.status(400).json('Error: ' + err)); // return error
    });

router.route('/add').post((req, res) => { // post request
    const username = req.body.username; // username variable
    const description = req.body.description; // description variable
    const duration = Number(req.body.duration); // duration variable
    const date = Date.parse(req.body.date); // date variable

    const newExcercise = new Excercise({ // new excercise
        username,
        description,
        duration,
        date,
    });

    newExcercise.save() // save excercise
        .then(() => res.json('Excercise added!')) // return message
        .catch(err => res.status(400).json('Error: ' + err)); // return error
});

router.route('/:id').get((req, res) => { // get request
    Excercise.findById(req.params.id) // find excercise
        .then(excercise => res.json(excercise)) // return excercise
        .catch(err => res.status(400).json('Error: ' + err)); // return error
});

router.route('/:id').delete((req, res) => { // delete request
    Excercise.findByIdAndDelete(req.params.id) // find excercise and delete
        .then(() => res.json('Excercise deleted.')) // return message
        .catch(err => res.status(400).json('Error: ' + err)); // return error
});

router.route('/update/:id').post((req, res) => { // post request
    Excercise.findById(req.params.id) // find excercise
        .then(excercise => { // excercise variables
            excercise.username = req.body.username;
            excercise.description = req.body.description;
            excercise.duration = Number(req.body.duration);
            excercise.date = Date.parse(req.body.date);

            excercise.save() // save excercise
                .then(() => res.json('Excercise updated!')) // return message
                .catch(err => res.status(400).json('Error: ' + err)); // return error
        })
        .catch(err => res.status(400).json('Error: ' + err)); // return error
});

module.exports = router; // export router