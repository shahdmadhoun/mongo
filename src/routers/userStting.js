const express = require('express');
const User = require('../models/userSttings');
const router = new express.Router();

router.get('/usersetting/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            res.status(404).send();
        }
    
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
})

module.exports = router;