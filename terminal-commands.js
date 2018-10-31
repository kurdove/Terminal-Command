const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  // your code here
  fs.writeFile(fileName, '', (err) => {
    if (err) throw err;
  });
};

module.exports.mkdir = (dirName) => {
  // your code here
  fs.mkdir(dirName, (err) => {
    if (err) throw err;
  });  
};