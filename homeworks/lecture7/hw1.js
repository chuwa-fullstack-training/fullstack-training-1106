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

const fs = require("fs");
const path = require("path");

function fetchFileName(dirName, fileExtension) {
    const curr_dir = __dirname;

    const dir_name = curr_dir + `\\` + (process.argv[2] || dirName);
    const file_extension = '.' + (process.argv[3] || fileExtension);

    fs.readdir(dir_name, (err, files) => {
        if (err) {
            console.log(`Can not find directory: ${dirName}`);
        }
        else {
            console.log(`curr directory is: ${dir_name}`);
            files.filter(file => {
                return path.extname(file) === file_extension;
            }).forEach(file => {
                console.log(file);
            })
        }
    })
}

fetchFileName('files', 'txt');
fetchFileName('files', 'pdf');
fetchFileName('bad_request', 'txt');