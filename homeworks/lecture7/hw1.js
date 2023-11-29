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

if (process.argv.length <= 3) {
    console.log("Please enter 3 arguments!");
    process.exit(-1);
}

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, (err, files) => {
    if(err) {
        throw err;
    }
    
    const filteredFiles = files.filter(file => path.extname(file) === `${extension}`)

    if(filteredFiles.length === 0){
        console.log('No file with this extension!')
    }

    for (var i=0; i<filteredFiles.length; i++) {
        console.log(filteredFiles[i]);
    }
});
 