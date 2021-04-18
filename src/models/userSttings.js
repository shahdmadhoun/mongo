const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');

const userSittingSchema = mongoose.Schema({

    theme: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    languege: {
        type: String,
    },
    userID: {
        type: ObjectId,
        required: true,
    }
});

router.post('/usersetting', (req, res) => {
    const userStting = req.body;
    userStting.save();
    
})


const userStting = mongoose.model('userStting', userSittingSchema);

module.exports = userStting;