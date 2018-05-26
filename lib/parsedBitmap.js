'use strict';


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

