const express = require('express');

const router = express.Router();
var data = require('../data/data.json')

router.get('/', (req, res)=>{
    var musicians = data.musicians;
    var picture = [];
    var artistName = [];

    var news = []
    var newsContent = []
    var newsTitle = []
    var tour = []
    musicians.forEach((item)=>{
        picture = picture.concat(item.shortname);
        artistName = artistName.concat(item.name);
        news = news.concat(item.news);
        tour = tour.concat(item.tour)
    });

    for(i=0; i < news.length; i++){
        newsTitle.push(news[i].title);
        newsContent.push(news[i].content);
    }

    
    res.render('index',{
        newsTitle: newsTitle,
        newsContent: newsContent,
        pageTitle: 'Muse',
        name: artistName,
        shortname: picture,
        musicians: musicians,
        pageID: 'home'
    })
});

module.exports = router;