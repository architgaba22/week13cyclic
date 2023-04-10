const express = require('express')

const Users = require('../../models/users')
const router = express.Router()

router.get('/get', async(req,res) => {
    await Users
                .find({})
                .then(users => res.send(users))
                .catch(err => res.status(400).send(err))
    
})

router.post('/add', (req,res) => {
    Users
        .findOne({username: req.body.username})
        .then(user => {
            if(user)
                res.status(400).send("Username already exist")
            else{
                const user = Users({
                    username: req.body.username
                })

                user
                    .save()
                    .then(user => res.status(200).send(user))
                    .catch(err => res.status(400).send(err))
            }
        })
})

module.exports = router
