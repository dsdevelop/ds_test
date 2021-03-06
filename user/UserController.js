var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));


//router.use(bodyParser.json());

var User = require('./User')

router.post('/', function(req,res){
	User.create ({
		name : req.body.name,
		email: req.body.email,
		password: req.body.name
	}, 
	function(err, users){
		if(err) return res.status(500).send("There was a problem adding the informaton to the database");
		res.status(200).send(users)
	});
});

router.get('/', function (req, res) {

    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });

});



module.exports = router;