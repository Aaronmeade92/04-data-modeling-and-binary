'use strict';

const fs = require('fs');
module.exports = exports = (buffer) => {

  const parsedBitmap = {
    
    dibHeader: {
      width: buffer.slice(18, 22),
      height: buffer.slice(22, 26),
      bitsPerPixel: buffer.slice(28, 30),
    },
    pixelArray: buffer.slice(buffer.slice(10, 14).readUInt32LE()),
  };
  return parsedBitmap;
};
/* **** need to do stuff to parsedBitmap like change colors***   */


// let writeFiles = (file, parsedBitmap) => {
//   fs.writeFile(fileName, fileData, (err) => {
//     if (err) {
//       return console.error(err);
//     } else {
//       return console.log('New bitmap file created.');
//     }
//   });
// };