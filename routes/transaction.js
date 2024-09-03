const express = require('express');
const router = express.Router();
const { defaultCon, addCon, updateCon, editCon, deleteCon, viewCon } = require('../controllers/myController');

router.get('/', defaultCon);
router.get('/add', (req, res) => {
    res.render('add'); });
router.post('/add', addCon);
router.get('/update/:id', updateCon);
router.post('/edit/:id', editCon);
router.get('/delete/:id', deleteCon);

module.exports = router;
