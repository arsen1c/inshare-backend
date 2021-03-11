const router = require('express').Router();
const User = require('../models/user');
const File = require('../models/user');


// Get all the users in the "inshare" collection
router.get('/all/users', (req, res) => {
	User.find()
		.then(docs => {
			res.send(docs);
		})
		.catch(err => {
			console.log(err);
			res.send(err.message);
		})
});

// Get all the files in the "inshare" collection
router.get('/all/files', (req, res) => {
	File.find()
		.then(files => {
			res.send(files);
		})
		.catch(err => {
			console.log(err);
			res.send(err.message);
		})
})


// Delete a user
router.get('/delete/user/:id', (req, res) => {
	User.remove({ '_id': req.params.id }, (err, done) => {
		console.log("DONE: " + done);
		if (err) throw err;
		console.log(`User with ID: ${req.params.id} was deleted`)
	})
})
// Delete a file
router.get('/delete/user/:id', (req, res) => {
	User.deleteOne({ '_id': req.params.id }, (err, done) => {
		console.log("DONE: " + done);
		if (err) throw err;
		console.log(`User with ID: ${req.params.id} was deleted`)
	})
})

module.exports = router;