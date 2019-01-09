const express = require('express');

const router = express.Router();
var data = require('../data/data.json')

router.get('/', (req, res)=>{
    var musicians = data.musicians;
    var picture = []

    musicians.forEach((item)=>{
        picture = picture.concat(item.shortname);
    })

    res.render('index',{
        pageTitle: 'Muse',
        shortname: picture,
        musicians: musicians,
        pageID: 'home'
    })
});

module.exports = router;