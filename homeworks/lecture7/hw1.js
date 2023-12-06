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
const { log } = require('console');
const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {string} dirPath 
 * @param {string} extension 
 */
const getFilesByExtension = (dirPath, extension = '') => {
    const normalizeDir = path.normalize(dirPath);
    const options = {
        encoding: 'utf8',
        withFileTypes: true
    }

    fs.readdir(normalizeDir, options, (err, files)=>{
        if(err){
            throw err;
        }
        else{
            files.map((file)=>{
                if(!file.isDirectory() && file.name.endsWith(extension)){
                    log(file.name);
                }
            });
        }
    });
}

getFilesByExtension(process.argv[2], process.argv[3]);