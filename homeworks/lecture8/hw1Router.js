const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:dir/:extension',(req, res) => {
    const dirName = req.params.dir
    const extensionName = '.' + req.params.extension
    
    fs.readdir(dirName,(err, files) =>{
        if (err){
            console.error("Error reading directory: ", err);
            res.status(500).send('500 Server Side Error!')
            return;
        }
        const matches = files.filter(file => path.extname(file) === extensionName);
        res.send(matches);
    });
})

module.exports = router;