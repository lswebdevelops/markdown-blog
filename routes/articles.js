const express = require( 'express');

const router = express.Router();

router.get('/new', (req, res, next) => {
   res.render('articles/new')
});

router.post('/', (req, res, next) => {

})

module.exports = router;

