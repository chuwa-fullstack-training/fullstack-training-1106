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
const fs = require('fs');
const path = require('path');

// your code here
var findFiles = function(dir,type){
    let res =  fs.readdir(dir, (err,files) => {
        // console.log(files);
        if(err) console.log(err);
        console.log('------------------')
        for(let i of files){
            if(path.extname(i) === type) console.log(i);
        }
    });
    return res;
}
findFiles("/Users/guangweina/Documents", ".png");
