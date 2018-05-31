'use strict';

function invert(bp) {

  // let result = [];

  // for (let i = bp.pixelArray.length - 1; i > 0; i--) {
  //   result.push(bp.pixelArray[i]);
  let invertedImage = bp.pixelArray.slice(54);
  for(let i = 0; i < invertedImage.length;  i++){
    invertedImage[i] = 0xff;
    // bp.pixelArray[i+1] = 0xff;
  }
  console.log(bp.pixelArray);
  return Buffer(bp.pixelArray);//?

}
module.exports = invert;
