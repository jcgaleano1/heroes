const {Router} = require('express');
const router = Router();

const data = require('../data.json')

console.log(data);
router.get('/', (req, res) => {
    res.json(data)
 });

 module.exports = router;


