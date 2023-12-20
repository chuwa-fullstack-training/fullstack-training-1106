/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 *    e.g. node hw1.js currentDir txt - process.argv[2] is `currentDir`, process.argv[3] is `txt`
 */

// your code here
const fs = require('fs');
const path = require('path');

const dirPath = __dirname + '/' + process.argv[2];
const fileExt = process.argv[3];

if(!dirPath || !fileExt){
    console.log("command line inputs are not provided");
    process.exit(1);
}

fs.readdir(dirPath, (err, files)=>{
    if(err){
        console.log("Error occurs when reading directory");
        process.exit(1);
    }
    // console.log("type of files", typeof(files), "files printed: ", files);
    //files is an array. eg:  [ 'test1.txt', 'test2.txt', 'test3.md', 'test4.md' ]
    const filesFiltered = files.filter(file => path.extname(file) === `.${fileExt}`);
    filesFiltered.forEach(file =>{
        const filePath = path.join(dirPath, file);
        fs.readFile(filePath, 'utf-8',(err, content)=>{
            console.log(`${file}: ${content}`);
        })
    });
})
