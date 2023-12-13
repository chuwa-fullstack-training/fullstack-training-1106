const fs = require('fs');
const path = require('path');

const getFileList = (req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;
    console.log(dir, ext);
    console.log("当前工作目录是:", process.cwd());
    const dirPath = path.join(__dirname, '..', dir);
  
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        res.status(500).send('Error reading directory');
        return;
      }
  
      const filteredFiles = files.filter(file => path.extname(file) === '.' + ext);
      res.json(filteredFiles);
    });
};
module.exports = {
getFileList
};