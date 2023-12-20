const router = require('express').Router(); // router variable
let User = require('../modules/user.model'); // user model

router.route('/').get((req, res) => { // get request
    User.find() // find users
        .then(users => res.json(users)) // return users
        .catch(err => res.status(400).json('Error: ' + err)); // return error
    });

router.route('/add').post((req, res) => { // post request
    const username = req.body.username; // username variable

    const newUser = new User({username}); // new user

    newUser.save() // save user
        .then(() => res.json('User added!')) // return message
        .catch(err => res.status(400).json('Error: ' + err)); // return error
});

module.exports = router; // export router