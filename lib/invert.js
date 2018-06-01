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
  
  // black and white to dotted
  // for(let i = 0; i < convertedImage.length;  i+=6){
  //   // convertedImage[i+1] = +10;
  //   // convertedImage[i+2] = +10;
  //   convertedImage[i+2] = +100;
  // }

  // color pixelate / dotted
  // for(let i = 0; i < convertedImage.length;  i+=16){
  //   // convertedImage[i+1] = +10;
  //   // convertedImage[i+2] = +10;
  //   convertedImage[i+3] = +100;
  // }


  // black and white lines
  // for(let i = 0; i < convertedImage.length;  i+=32){
  //   convertedImage[i+3] = +1000;
  // }

  // color lines
  for(let i = 0; i < convertedImage.length;  i+=30){
    convertedImage[i+1] = +1000;
    convertedImage[i+2] = +1000;
    convertedImage[i+3] = +1000;
  }
    
  
  return Buffer(bp.pixelArray);

}
module.exports = convert;

