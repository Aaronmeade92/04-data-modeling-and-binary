'use strict';

function invert(bp) {

  // let result = [];

  // for (let i = bp.pixelArray.length - 1; i > 0; i--) {
  //   result.push(bp.pixelArray[i]);
  // let invertedImage = bp.pixelArray.slice(10,14);
  for(let i = 0; i < bp.pixelArray.length;  i += 2){
    bp.pixelArray[i] = 0xff;
    bp.pixelArray[i+1] = 0xff;
  }
  let invertedImage = bp.pixelArray.slice(54);
  return invertedImage;

}
module.exports = invert;
