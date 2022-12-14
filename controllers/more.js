const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World from More");
})

router.get('/two', (req, res) => {
    res.send("Hello World again from More");
})

module.exports = router
