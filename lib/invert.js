'use strict';

function convert(bp) {
  let convertedImage = bp.pixelArray.slice(54);
  for(let i = 0; i < convertedImage.length;  i+=2){
    convertedImage[i+1] = 0x00ff00;
    convertedImage[i+2] = 0xff;
  }
  return Buffer(bp.pixelArray);

}
module.exports = convert;
