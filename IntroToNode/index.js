//import { copyFileSync, constants } from 'fs';
const fs = require("fs");
// destination.txt will be created or overwritten by default.
fs.copyFileSync('text1.txt', 'newFile.txt');
console.log('text1.txt was copied to newFile.txt');
