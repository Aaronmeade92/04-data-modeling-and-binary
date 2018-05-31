'use strict';

module.exports = exports = (buffer) => {

  const parsedBitmap = {
    dibHeader:  {
      width: buffer.slice(18, 22),
      height: buffer.slice(22, 26),
      bitsPerPixel: buffer.slice(28, 30),
    },
    pixelArray: buffer.slice(buffer.slice(54)),
  };
  // console.log(parsedBitmap.pixelArray.length);
  // console.log(parsedBitmap.dibHeader.width);
  console.log(parsedBitmap.pixelArray);
  return parsedBitmap;
};
