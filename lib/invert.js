'use strict';

function invert(bp) {

  // let result = [];
  let invertedImage;
  console.log(bp.pixelArray.slice(10,14));
  // for (let i = bp.pixelArray.length - 1; i > 0; i--) {
  //   result.push(bp.pixelArray[i]);
  // let invertedImage = bp.pixelArray.slice(10,14);
  for(let i = 0; i < bp.pixelArray.length;  i += 2){
    bp.pixelArray[i] = 0xff;
    // bp.pixelArray[i+1] = 0xff;
  }
  
  console.log(bp.pixelArray.slice(10,14));
  // console.log(result);
  // console.log(bp.header.offsetToPixelArray);
  // let invertedImage = result;
  // console.log(invertedImage);
  // let invertedImageX = invertedImage.slice(10,14);
  invertedImage = bp.pixelArray.slice(10,14);
  return invertedImage;//?
}

//bp.pixelArray.slice(0, bp.header.offsetToPixelArray) +


module.exports = invert;
