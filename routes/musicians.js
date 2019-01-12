const express = require('express');

const router = express.Router();

var data = require('../data/data.json')


// router.get('/musicians', (req, res)=>{

//     var musiciansData = data.musicians;
//     var html = "";

//     var count = 0;
//     musiciansData.forEach((group)=>{

//         html += `
//             <li>
//                 <h2><a href='/musicians/${count}'>${group.name}</a></h2>
//                 <img src='/images/musicians/${group.shortname}_1.png' width="200" height="150">
//                 <div> 
//             </li>
        
//         `
//         count++;
//     })
//     res.send(`<ul>${html}</ul>`);
// })
// router.get('/musicians/:musicianID', (req,res)=>{
//     var musicians = data.musicians[req.params.musicianID]
//     var html = "";

//         html += `
//         <h1>${musicians.name}</h1>
//         <img src='/images/musicians/${musicians.shortname}_2.png' width="200" height="150"> 
//         <div>
//         <div> 
//         Tour:
//         <ul> 
//             <li> Place: ${musicians.tour[0].place}, Stage: ${musicians.tour[0].stage}, Date: ${musicians.tour[0].date} </li>
//             <li> Place: ${musicians.tour[1].place}, Stage: ${musicians.tour[1].stage}, Date: ${musicians.tour[1].date} </li>
//             <li> Place: ${musicians.tour[2].place}, Stage: ${musicians.tour[2].stage}, Date: ${musicians.tour[2].date} </li>
//         </ul>
//         <div> Album: ${musicians.album[0].name}</div>


//         `;
//         let i = 0;
//         while(i < musicians.album[0].songs.length){
//             html += `<li style="font-size:.9em">${musicians.album[0].songs[i].name}</li>` 
//             i++      
//        }
        
//     res.send(`${html}`);
// });
module.exports = router;
