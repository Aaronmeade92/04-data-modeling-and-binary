'use strict';
const parser = require('../lib/parsedBitmap.js');
module.exports = exports = (buffer) => {
  const bp = parser(buffer);

  function invert(){
    for(let i = 0; i < (bp.dibHeader.pixelArray.length - 4); i = i - 4){
      bp.dibHeader.pixelArray[i] = 255 - buffer.pixelArray[i];
      bp.dibHeader.pixelArray[i + 1] = 255 - buffer.pixelArray[i + 1];
      bp.dibHeader.pixelArray[i + 2] = 255 - buffer.pixelArray[i + 2];
    }

  }
  
  invert(bp);
  console.log(invertedImage);
  return invertedImage;
};



// class NewImage {

// constructor(){
//     this.invertedImage
// }

// }