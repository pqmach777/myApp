const express = require('express');

const router = express.Router();


router.get('/', (req, res)=>{

    res.send(`
    <body background = '/images/musicians/wallpaper.png' style="background-size: cover; background-repeat: no-repeat">
        <h1 style="color: white">The Musicians</h1> 
    </body>
    `)
});


module.exports = router;