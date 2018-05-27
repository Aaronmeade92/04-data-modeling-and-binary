'use strict';

module.exports = exports = (bp) => {


  function invert() {

    let result = [];
    for (let i = bp.pixelArray.length - 1; i > 0; i--) {
      result.push(bp.pixelArray[i]);

      // for(let i = 0; i < (bp.dibHeader.pixelArray.length - 4); i = i - 4){
      //   bp.dibHeader.pixelArray[i] = 255 - buffer.pixelArray[i];
      //   bp.dibHeader.pixelArray[i + 1] = 255 - buffer.pixelArray[i + 1];
      //   bp.dibHeader.pixelArray[i + 2] = 255 - buffer.pixelArray[i + 2];
      // }

    }
    let invertedImage = bp.pixelArray.slice(0, bp.header.offsetToPixelArray) + result;
    return invertedImage;
  }
  invert(bp);
  
};