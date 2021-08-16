const fs = require('fs');

function writeToFile(fileName, data) {
    const filePath = ('./dist/' + fileName);
    fs.writeFile(filePath, data, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
};


module.exports = writeToFile;