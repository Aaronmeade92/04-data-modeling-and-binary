'use strict';

function convert(bp) {

  // green
  let convertedImage = bp.pixelArray.slice(54);
  // for(let i = 0; i < convertedImage.length;  i+=2){
  //   convertedImage[i+1] = 0x00ff00;
  //   convertedImage[i+2] = 0xff;
  // }
  // wierd
  // for(let i = 0; i < convertedImage.length;  i+=2){
  //   convertedImage[i+3] = +1;
  // convertedImage[i+1] = +1;
  // convertedImage[i+2] = +1;
  // }

  // red tint
  // for(let i = 0; i < convertedImage.length;  i+=3){
  //   convertedImage[i+1] = 0x00ff00;
  //   // convertedImage[i+1] = +1;
  // // convertedImage[i+2] = +1;
  // }

  // fade
  // for(let i = 0; i < convertedImage.length;  i+=3){
  //   convertedImage[i+1] = +100;
  // convertedImage[i+1] = +1;
  // convertedImage[i+2] = +1;
  // }

  //color blown out
  // for(let i = 0; i < convertedImage.length;  i+=3){
  //   convertedImage[i+1] = +1000;
  // convertedImage[i+2] = +1;
  // convertedImage[i+3] = +1;
  // }
  
  for(let i = 0; i < convertedImage.length;  i+=2){
    // convertedImage[i+1] = +10;
    // convertedImage[i+2] = +10;
    convertedImage[i+3] = -500;
  }
  
  return Buffer(bp.pixelArray);

}
module.exports = convert;

