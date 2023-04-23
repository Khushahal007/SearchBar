const express = require('express')
const searchModel = require('../Models/searchModel')
const router = express.Router()



router.get('/search/company/:key', async (req, res) => {
    const searchResults = await searchModel.find({
        companyId: { $eq: parseInt(req.params.key) }
    });
    res.send(searchResults);
    console.log(searchResults);
});


router.get('/search/headline/:search', async (req, res) => {
    const searchResults = await searchModel.find({
        headline: { $regex: req.params.search, $options: 'i' }
    });
    res.send(searchResults);
    console.log(searchResults);
});

router.get('/search/companies/:search', async (req, res) => {
    const searchResults = await searchModel.find({
        headline: { $regex: req.params.search, $options: 'i' }
    });
    res.send(searchResults);
    console.log(searchResults);
});



module.exports = router